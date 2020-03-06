<?php
ob_start();
$changepass_active = 'kt-menu__item--active';
include('sidebar.php');

$result = $odb -> prepare("SELECT * FROM `players` WHERE `uid`= uid");
$result -> execute(array("uid" => $_SESSION['ID']));
$row = $result -> fetch();
?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Change Password</h3>
									<span class="kt-subheader__separator kt-subheader__separator--v"></span>
								</div>
								<div class="kt-subheader__toolbar">
									<div class="kt-subheader__wrapper">
											<span class="kt-subheader__btn-daterange-title" id="kt_dashboard_daterangepicker_title">Today is</span>&nbsp;
											<span class="kt-subheader__btn-daterange-date" id="kt_dashboard_daterangepicker_date">
												<?php $today = date("F j, Y"); 
												echo $today;
												?>
											</span>
											<i class="far fa-calendar-alt"></i>
									</div>
								</div>
							</div>
						</div>

						<!-- end:: Content Head -->
						<!-- begin:: Content -->
						<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">

							<!--Begin::App-->
							<div class="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">


								<!--Begin:: App Aside-->
								<?php $changepassmenu_active = 'kt-widget__item--active';
                                 include('profilemenu.php'); ?>

								<!--End:: App Aside-->

								<!--Begin:: App Content-->
																<div class="kt-grid__item kt-grid__item--fluid kt-app__content">
									<div class="row">
										<div class="col-xl-12">
											<div class="kt-portlet kt-portlet--height-fluid">
												<div class="kt-portlet__head">
													<div class="kt-portlet__head-label">
														<span class="kt-portlet__head-icon">
													    <i class="la la-key"></i>
												        </span>
														<h3 class="kt-portlet__head-title">Change Password<small>change or reset your account password</small></h3>
													</div>
												</div>
                                                <?php
  if(isset($_POST['submit'])):
  extract($_POST);
  if($current_password!="" && $new_password!="" && $confirm_password!="") :
  $user_id = $_SESSION['ID'];
  $current_pwd=hash('sha512',$_POST['current_password']);
  $pwd=hash('sha512',$_POST['new_password']);
  $c_pwd=hash('sha512',$_POST['confirm_password']);
  if($pwd == $c_pwd) :
  if($pwd!=$current_pwd) :
    $sql="SELECT count(*) FROM `players` WHERE `UID`='$user_id' AND `password` ='$current_pwd'";
    $db_check=$odb->prepare($sql);
    $db_check->execute();
    $count=$db_check->fetchColumn();
  if($count==1) :
    $fetch=$odb->query("UPDATE `players` SET `password` = '$pwd' WHERE `UID`='$user_id'");
    $current_password=''; $new_password =''; $confirm_password = '';
    $msg_success = '<div class="alert alert-success" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">Your New Password is updated successfully.</div>
                            <div class="alert-close">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                </button>
                            </div>
                        </div>';
  else:
    $error = '<div class="alert alert-danger fade show" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">The Current Password you gave is incorrect!</div>
                            <div class="alert-close">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                </button>
                            </div>
                        </div>';
  endif;
  else :
    $error = '<div class="alert alert-danger fade show" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">Old Password and New Password are same. Please enter again!</div>
                            <div class="alert-close">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                </button>
                            </div>
                        </div>';
  endif;
  else:
    $error = '<div class="alert alert-danger fade show" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">New Password and Confirm Password do not match.</div>
                            <div class="alert-close">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                </button>
                            </div>
                        </div>';
  endif;
  else :
    $error = '<div class="alert alert-danger fade show" role="alert">
                            <div class="alert-icon"><i class="flaticon-warning"></i></div>
                            <div class="alert-text">Please fill in all the fields.</div>
                            <div class="alert-close">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                </button>
                            </div>
                        </div>';
  endif;   
  endif;
?>

												<form class="kt-form kt-form--label-right" method="POST">
													<div class="kt-portlet__body">
														<div class="kt-section kt-section--first">
															<div class="kt-section__body">
																<?php echo @$error; ?><?php echo @$msg_success; ?>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Current Password</label>
																	<div class="col-lg-9 col-xl-6">
																		<input type="password" class="form-control" maxlength="128" value="" placeholder="Current Password" name="current_password" id="current_password">
																		<div class="kt-font-sm kt-font-bold kt-margin-t-5">Forgot password ?<small>&nbsp;<a href="http://forums.hzgaming.net/forms.php?do=form&fid=31" class="kt-link kt-font-sm kt-font-bold kt-margin-t-5">Submit a recovery request here</a></small></div>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">New Password</label>
																	<div class="col-lg-9 col-xl-6">
																		<input type="password" class="form-control" maxlength="128" value="" placeholder="New Password" name="new_password" id="new_password">
																	</div>
																</div>
																<div class="form-group form-group-last row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Confirm Password</label>
																	<div class="col-lg-9 col-xl-6">
																		<input type="password" class="form-control" maxlength="128" value="" placeholder="Confirm Password" name="confirm_password" id="confirm_password">
																		<input type="hidden" id="csrf_token" name="csrf_token" value="<?php echo hash_hmac('sha512', '', $_SESSION['csrf_token']); ?>" />
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="kt-portlet__foot">
														<div class="kt-form__actions">
															<div class="row">
																<div class="col-lg-3 col-xl-3">
																</div>
																<div class="col-lg-9 col-xl-9">
																	<button type="submit" class="btn btn-brand btn-bold" name="submit">Change Password</button>&nbsp;
																	<button type="reset" class="btn btn-secondary">Cancel</button>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>

								<!--End:: App Content-->
							</div>

							<!--End::App-->
						</div>

						<!-- end:: Content -->
					</div>


<!-- end:: Page -->



		<!-- begin::Scrolltop -->
		<div id="kt_scrolltop" class="kt-scrolltop">
			<i class="fa fa-arrow-up"></i>
		</div>

		<!-- end::Scrolltop -->	
							<!-- start:: footer -->
							<?php include('footer.php'); ?>
                    <!-- end:: footer -->	
	</body>

	<!-- end::Body -->
</html>