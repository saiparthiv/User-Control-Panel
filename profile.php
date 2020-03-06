<?php
ob_start();
$stats_active = 'kt-menu__item--active';
include('sidebar.php');

$result = $odb -> prepare("SELECT * FROM `players` WHERE `uid`= uid");
$result -> execute(array("uid" => $_SESSION['ID']));
$row = $result -> fetch();
?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Profile Overview</h3>
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
                                 <?php $profilestatsmenu_active = 'kt-widget__item--active';
                                 include('profilemenu.php'); ?>

								<!--End:: App Aside-->

								<!--Begin:: App Content-->
								<div class="kt-grid__item kt-grid__item--fluid kt-app__content">
									<div class="row">
										<div class="col-xl-6">

									<!--begin:: Widgets/Last Updates-->
									    <div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-brand">
										<div class="kt-portlet__body">
											<div class="kt-widget kt-widget--user-profile-3">
												<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title portlettitle">
													<span class="kt-portlet__head-icon">
													<i class="flaticon-list"></i>
												</span>&nbsp;&nbsp;Account Stats
												</h3>
											    </div>
												<div class="kt-widget__bottom">
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="flaticon-profile-1"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Player Name</span>
															<span class="kt-widget__value"><?php echo $row['Username']; ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="flaticon-confetti"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Level</span>
															<span class="kt-widget__value"><?php echo $row['Level']; ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="flaticon-clock-1"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Hours Played</span>
															<span class="kt-widget__value"><?php echo number_format($row['HoursPlayed']); ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="flaticon-customer"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Age</span>
															<span class="kt-widget__value"><?php echo $row['Age']; ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-transgender"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Sex</span>
															<span class="kt-widget__value">
															<?php 
															if(($row['Sex'] == "1" ))
															echo "Male"; 
                                                            else if (($row['Sex'] == "2" ))
                                                            echo "Female";?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-heartbeat"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Spouse</span>
															<span class="kt-widget__value"><?php 
                                                            $row['MarriedTo'] = str_replace("_", " ", $row['MarriedTo']);
		                                                    $row['MarriedTo'] = ucwords($row['MarriedTo']);
															echo $row['MarriedTo']; ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="flaticon-coins"></i>
														</div>
														<div class="kt-widget__details">
															<?php $totalwealth = $row['Cash'] + $row['Bank'];?>
															<span class="kt-widget__title">Total Wealth</span>
															<?php echo '<span class="kt-widget__value"><span>$</span>' .number_format($totalwealth). '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="flaticon-placeholder-1"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Last Login</span>
															<span class="kt-widget__value"><?php echo $row['LastLogin']; ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="flaticon-users"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title"><?php 
															if(($row['Gang'] > "0" ))
															echo "Gang"; 
                                                            else echo "Faction";?></span>
															<span class="kt-widget__value">Black Hand Triads</span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-star-o"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Rank</span>
															<span class="kt-widget__value">
															White Lotus</span>
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
										<div class="kt-portlet__body">
											<div class="kt-widget kt-widget--user-profile-3">
												<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title portlettitle">
													<span class="kt-portlet__head-icon">
													<i class="flaticon-diagram"></i>
												</span>&nbsp;&nbsp;Account Skills
												</h3>
											    </div>
												<div class="kt-widget__bottom">
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-user-secret"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Detective Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['DetSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-anchor"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Fishing Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['FishSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-legal"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Lawyer Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['LawSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-female"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Whore Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['SexSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-flask"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Drug Dealer Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['DrugsSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-archive"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Drug Smuggler Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['SmugglerSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-crosshairs"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Arms Dealer Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['ArmsSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-wrench"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Mechanic Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['MechSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-hand-grab-o"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Boxing Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['BoxSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-car"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Car Jacker Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['CarSkill']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-truck"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Trucker Skill</span>
															<?php echo '<span class="kt-widget__value">' .$row['TruckSkill']. '</span>';?>
														</div>
													</div>
												</div>
											</div>
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