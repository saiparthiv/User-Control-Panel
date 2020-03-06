<?php
ob_start();
$punishments_active = 'kt-menu__item--active';
include('sidebar.php');

$result = $odb -> prepare("SELECT * FROM `players` WHERE `uid`= uid");
$result -> execute(array("uid" => $_SESSION['ID']));
$row = $result -> fetch();

$userid = $_SESSION['ID'];
$banResult = $odb -> query("SELECT * FROM `bans` WHERE uid='$userid' ORDER BY `date` DESC");
?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Punishment Records</h3>
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
								<?php $punishmentsmenu_active = 'kt-widget__item--active';
                                 include('profilemenu.php'); ?>

								<!--End:: App Aside-->

								<!--Begin:: App Content-->
								<div class="kt-grid__item kt-grid__item--fluid kt-app__content">
									<div class="row">
										<div class="col-xl-12">
											<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-brand">
												<div class="kt-portlet__head">
													<div class="kt-portlet__head-label">
														<span class="kt-portlet__head-icon">
													    <i class="flaticon-eye"></i>
												        </span>
														<h3 class="kt-portlet__head-title">Warnings & Mute Records</h3>
													</div>
												</div>
												<div class="kt-portlet kt-portlet--label-right">
													<div class="kt-portlet__body">
														<div class="kt-section kt-section--first">
															<div class="kt-section__body">
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Current Warnings</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php echo $row['Warnings']; ?></span></label>
																	</div>
																	<label class="col-xl-3 col-lg-3 col-form-label">Newb Muted</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php 
															if(($row['NewMuted'] == "0" ))
															echo "No"; 
                                                            else if (($row['NewMuted'] == "1" ))
                                                            echo "Yes";?></span></label>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Total Newb Mutes</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php echo $row['NewMutedTotal']; ?></span></label>
																	</div>
																	<label class="col-xl-3 col-lg-3 col-form-label">Global Chat Muted</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php 
															if(($row['GCMuted'] == "0" ))
															echo "No"; 
                                                            else if (($row['GCMuted'] == "1" ))
                                                            echo "Yes";?></span></label>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Total Global Chat Mutes</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php echo $row['GCMutedTotal']; ?></span></label>
																	</div>
																	<label class="col-xl-3 col-lg-3 col-form-label">Global Chat Muted Time</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php echo $row['GCMutedTime']; ?></span></label>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Ad Muted</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php 
															if(($row['AdMuted'] == "0" ))
															echo "No"; 
                                                            else if (($row['AdMuted'] == "1" ))
                                                            echo "Yes";?></span></label>
																	</div>
																	<label class="col-xl-3 col-lg-3 col-form-label">Total Ad Mutes</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php echo $row['AdMutedTotal']; ?></span></label>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Report Muted</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php 
															if(($row['ReportMuted'] == "0" ))
															echo "No"; 
                                                            else if (($row['ReportMuted'] == "1" ))
                                                            echo "Yes";?></span></label>
																	</div>
																	<label class="col-xl-3 col-lg-3 col-form-label">Total Report Mutes</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php echo $row['ReportMutedTotal']; ?></span></label>
																	</div>
																</div>
																<div class="form-group form-group-last row">
																	<label class="col-xl-3 col-lg-3 col-form-label">Report Muted Time</label>
																	<div class="col-lg-3 col-xl-3">
																	<label class="col-form-label"><span class="kt-badge kt-badge--primary kt-badge--inline"><?php echo $row['ReportMutedTime']; ?></span></label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

											</div>



											<!--end:: Widgets/Notifications-->
										</div>

										<div class="col-xl-6">
										<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-brand">
										<div class="kt-portlet__head">
											<div class="kt-portlet__head-label">
												<span class="kt-portlet__head-icon">
													<i class="la la-legal"></i>
												</span>
												<h3 class="kt-portlet__head-title">
													Ban History
												</h3>
											</div>
										</div>
										<div class="kt-portlet__body">

											<!--begin::Section-->
											<div class="kt-section">
												<div class="kt-section__content">
													<?php
													$number = 1;
													if($banResult -> rowCount() == 0){
								echo "<center><strong>You have no Bans.</strong></center>";
							}
							else {
						echo
													'<table class="table">
														<thead class="thead-light">
															<tr>
																<th>#</th>
																<th>Date</th>
																<th>Banned By</th>
																<th>Ban Reason</th>
															</tr>
														</thead>
														<tbody>';
														}
														while($row = $banResult -> fetch())
                                                        { echo
															'<tr class="table table-striped">
																<th scope="row">'.$number++.'</th>
																<td>'.$row['date'].'</td>
																<td>'.$row['bannedby'].'</td>
																<td>'.$row['reason'].'</td>
															</tr>' ;} 
                                                    ?>
														</tbody>
													</table>
												</div>
											</div>

											<!--end::Section-->
										</div>
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