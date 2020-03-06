<?php
ob_start();
$inventory_active = 'kt-menu__item--active';
include('sidebar.php');


$result = $odb -> prepare("SELECT * FROM `players` WHERE `uid`= uid");
$result -> execute(array("uid" => $_SESSION['ID']));
$row = $result -> fetch();

$userid = $_SESSION['ID'];
$houseResult = $odb -> query("SELECT * FROM `houses` WHERE ownerid='$userid' ORDER BY `id` ASC");
$vehResult = $odb -> query("SELECT * FROM `vehicles` WHERE ownerid='$userid' ORDER BY `id` ASC");
?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Inventory</h3>
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
								<?php $inventorymenu_active = 'kt-widget__item--active';
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
													<i class="flaticon-interface-3"></i>
												</span>&nbsp;&nbsp;Inventory
												</h3>
											    </div>
												<div class="kt-widget__bottom">
												<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-money"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Cash</span>
															<?php echo '<span class="kt-widget__value"><span>$</span>' .number_format($row['Cash']). '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-bank"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Bank</span>
															<?php echo '<span class="kt-widget__value"><span>$</span>' .number_format($row['Bank']). '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-phone"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Phone Number</span>
															<span class="kt-widget__value">
															<?php 
															if(($row['PhoneNumber'] != "0" ))
															echo $row['PhoneNumber']; 
                                                            else echo "None";?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-leaf"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Pot</span>
															<?php echo '<span class="kt-widget__value">' .number_format($row['Pot']). '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-flask"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Crack</span>
															<?php echo '<span class="kt-widget__value">' .number_format($row['Crack']). '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-archive"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Materials</span>
															<?php echo '<span class="kt-widget__value">' .number_format($row['Materials']). '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-pied-piper-alt"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Cigars</span>
															<?php echo '<span class="kt-widget__value">' .$row['Cigars']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-lastfm"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Ropes</span>
															<?php echo '<span class="kt-widget__value">' .$row['Rope']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-beer"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Sprunks</span>
															<?php echo '<span class="kt-widget__value">' .$row['Sprunk']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-paint-brush"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Spraycans</span>
															<?php echo '<span class="kt-widget__value">' .$row['Spraycan']. '</span>';?>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-medkit"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Insurance</span>
															<span class="kt-widget__value"><?php 
															$row['Insurance'];
															if($row == 0)
															echo "No"; 
                                                            else echo "Yes"; ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-car"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Car License</span>
															<span class="kt-widget__value"><?php 
															$row['CarLic'];
															if($row == 0)
															echo "No"; 
                                                            else echo "Yes"; ?></span>
														</div>
													</div>
													<div class="kt-widget__item">
														<div class="kt-widget__icon">
															<i class="la la-plane"></i>
														</div>
														<div class="kt-widget__details">
															<span class="kt-widget__title">Flight License</span>
															<span class="kt-widget__value"><?php 
															$row['FlyLic'];
															if($row == 0)
															echo "No"; 
                                                            else echo "Yes"; ?></span>
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
													<i class="flaticon-dashboard"></i>
												</span>
												<h3 class="kt-portlet__head-title">
													Vehicles
												</h3>
											</div>
										</div>
										<div class="kt-portlet__body">

											<!--begin::Section-->
											<div class="kt-section">
												<div class="kt-section__content">
													<?php
													$number = 1;
													if($vehResult -> rowCount() == 0){
								echo "<center><strong>You have no Vehicles.</strong></center>";
							}
							else {
						echo '<table class="table table-striped table-bordered">
														<thead class="thead-light">
															<tr>
																<th>#</th>
																<th><center>Vehicle Name</center></th>
																<th><center>Vehicle Image</center></th>
															</tr>
														</thead>
														<tbody>';
														}
														while($row = $vehResult -> fetch())
                                                        { echo '
                                                    <tr>
                                                    <td>'.$number++.''; ?>
                                                    <?php 
                                                     $vehicleid = $row['modelid'];
													$vehiclename = str_replace(
                                                    array("400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "444", "445", "446", "447", "448", "449", "450", "451", "452", "453", "454", "455", "456", "457", "458", "459", "460", "461", "462", "463", "464", "465", "466", "467", "468", "469", "470", "471", "472", "473", "474", "475", "476", "477", "478", "479", "480", "481", "482", "483", "484", "485", "486", "487", "488", "489", "490", "491", "492", "493", "494", "495", "496", "497", "498", "499", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "512", "513", "514", "515", "516", "517", "518", "519", "520", "521", "522", "523", "524", "525", "526", "527", "528", "529", "530", "531", "532", "533", "534", "535", "536", "537", "538", "539", "540", "541", "542", "543", "544", "545", "546", "547", "548", "549", "550", "551", "552", "553", "554", "555", "556", "557", "558", "559", "560", "561", "562", "563", "564", "565", "566", "567", "568", "569", "570", "571", "572", "573", "574", "575", "576", "577", "578", "579", "580", "581", "582", "583", "584", "585", "586", "587", "588", "589", "590", "591", "592", "593", "594", "595", "596", "597", "598", "599", "600", "601", "602", "603", "604", "605", "606", "607", "608", "609", "610", "611"),
													array("Landstalker", "Bravura", "Buffalo", "Linerunner", "Perennial", "Sentinel", "Dumper", "Fire Truck", "Trashmaster", "Stretch", "Manana", 
                       "Infernus", "Voodoo", "Pony", "Mule", "Cheetah", "Ambulance", "Leviathan", "Moonbeam", "Esperanto", "Taxi", "Washington", "Bobcat", 
                       "Mr. Whoopee", "BF Injection", "Hunter", "Premier", "Enforcer", "Securicar", "Banshee", "Predator", "Bus", "Rhino", "Barracks", "Hotknife", 
                       "Trailer 1", "Previon", "Coach", "Cabbie", "Stallion", "Rumpo", "RC Bandit", "Romero", "Packer", "Monster", "Admiral", "Squalo", 
                       "Seasparrow", "Pizzaboy", "Tram", "Trailer 2", "Turismo", "Speeder", "Reefer", "Tropic", "Flatbed", "Yankee", "Caddy", "Solair", 
                       "Berkley's RC Van", "Skimmer", "PCJ-600", "Faggio", "Freeway", "RC Baron", "RC Raider", "Glendale", "Oceanic", "Sanchez", "Sparrow", "Patriot", 
                       "Quadbike", "Coastguard", "Dinghy", "Hermes", "Sabre", "Rustler", "ZR-350", "Walton", "Regina", "Comet", "BMX", "Burrito", "Camper", "Marquis", 
                       "Baggage", "Dozer", "Maverick", "News Chopper", "Rancher", "FBI Rancher", "Virgo", "Greenwood", "Jetmax", "Hotring Racer", "Sandking", 
                       "Blista Compact", "Police Maverick", "Boxville", "Benson", "Mesa", "RC Goblin", "Hotring Racer 3", "Hotring Racer 2", "Bloodring Banger", 
                       "Rancher Lure", "Super GT", "Elegant", "Journey", "Bike", "Mountain Bike", "Beagle", "Cropduster", "Stuntplane", "Tanker", "Roadtrain", "Nebula", 
                       "Majestic", "Buccaneer", "Shamal", "Hydra", "FCR-900", "NRG-500", "HPV1000", "Cement Truck", "Towtruck", "Fortune", "Cadrona", "FBI Truck", 
                       "Willard", "Forklift", "Tractor", "Combine Harvester", "Feltzer", "Remington", "Slamvan", "Blade", "Freight", "Streak", "Vortex", "Vincent", 
                       "Bullet", "Clover", "Sadler", "Fire Truck Ladder", "Hustler", "Intruder", "Primo", "Cargobob", "Tampa", "Sunrise", "Merit", "Utility Van", 
                       "Nevada", "Yosemite", "Windsor", "Monster 2", "Monster 3", "Uranus", "Jester", "Sultan", "Stratum", "Elegy", "Raindance", "RC Tiger", "Flash", 
                       "Tahoma", "Savanna", "Bandito", "Freight Train Flatbed", "Streak Train Trailer", "Kart", "Mower", "Dune", "Sweeper", "Broadway", "Tornado", 
                       "AT-400", "DFT-30", "Huntley", "Stafford", "BF-400", "Newsvan", "Tug", "Trailer (Tanker Commando)", "Emperor", "Wayfarer", "Euros", "Hotdog", 
                       "Club", "Box Freight", "Trailer 3", "Andromada", "Dodo", "RC Cam", "Launch", "Police LS", "Police", "Police SF", "Police LV", "Police Ranger", 
                       "Ranger", "Picador", "S.W.A.T.", "Alpha", "Phoenix", "Glendale Damaged", "Sadler", "Sadler Damaged", "Baggage Trailer (covered)", 
                       "Baggage Trailer (Uncovered)", "Trailer (Stairs)", "Boxville Mission", "Farm Trailer", "Street Clean Trailer"),
                       $vehicleid);
                                                    ?>
                                                    <?php echo '</td>
                                                    <td><center>'.$vehiclename.'</center></td>
                                                    <td><center><img src="images/vehicles2/'.$row['modelid'].'.png" style="height: 60px"></center></td>
                                                    </tr>
                                                    ';} 
                                                    ?>
														</tbody>
													</table>
												</div>
											</div>

											<!--end::Section-->
										</div>

										<!--end::Form-->
									</div>
								</div>


								<div class="col-xl-6">
										<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-brand">
										<div class="kt-portlet__head">
											<div class="kt-portlet__head-label">
												<span class="kt-portlet__head-icon">
													<i class="flaticon-home-2"></i>
												</span>
												<h3 class="kt-portlet__head-title">
													Houses
												</h3>
											</div>
										</div>
										<div class="kt-portlet__body">

											<!--begin::Section-->
											<div class="kt-section">
												<div class="kt-section__content">
													<?php
													$number = 1;
													if($houseResult -> rowCount() == 0){
								echo "<center><strong>You have no Houses.</strong></center>";
							}
							else {
						echo
													'<table class="table">
														<thead class="thead-light">
															<tr>
																<th>#</th>
																<th>Level</th>
																<th>Cash</th>
																<th>Pot</th>
																<th>Crack</th>
																<th>Materials</th>
															</tr>
														</thead>
														<tbody>';
														}
														while($row = $houseResult -> fetch())
                                                        { echo
															'<tr class="table table-striped">
																<th scope="row">'.$number++.'</th>
																<td>'.$row['level'].'</td>
																<td>'.number_format($row['cash']).'</td>
																<td>'.$row['weed'].'</td>
																<td>'.$row['cocaine'].'</td>
																<td>'.number_format($row['materials']).'</td>
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