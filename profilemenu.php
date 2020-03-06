<div class="kt-grid__item kt-app__toggle kt-app__aside" id="kt_user_profile_aside">
<div class="kt-portlet kt-portlet--height-fluid- kt-portlet--border-bottom-brand">
										<div class="kt-portlet__head  kt-portlet__head--noborder">
											<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title">
												</h3>
											</div>
										</div>
										<div class="kt-portlet__body kt-portlet__body--fit-y">

											<!--begin::Widget -->
											<div class="kt-widget kt-widget--user-profile-1">
												<div class="kt-widget__head">
													<div class="kt-widget__media">
														<a href="images/skins/<?php echo $row['Skin']; ?>.png" class="preview" title="Skin <?php echo $row['Skin']; ?>"><img src='images/faces/<?php echo $row['Skin']; ?>.png' class='img-thumbnail'></a>
													</div>
													<div class="kt-widget__content">
														<div class="kt-widget__section">
														<div class="kt-widget__username">
															<?php
		                                                      $row['Username'] = str_replace("_", " ", $row['Username']);
		                                                      $row['Username'] = ucwords($row['Username']);
		                                                      echo" " .$row['Username']. " "
                                                            ?>
                                                        </div>
                                                    </div>
														<div class="kt-widget__action">
															
														</div>
													</div>
												</div>
												<div class="kt-widget__body">
													<div class="kt-widget__content">
														<?php if(($row['Donator'] > "0" ))
															switch ($row['Donator']) {
    case "1":
        echo '<span class="badge badge-danger"><i class="fas fa-gem"></i>&nbsp;Ruby Donator</span>';
        break;
    case "2":
        echo '<span class="badge badge-primary"><i class="fas fa-gem"></i>&nbsp;Sapphire Donator</span>';
        break;
    case "3":
        echo '<span class="badge badge-info"><i class="fas fa-gem"></i>&nbsp;Diamond Donator</span>';
        break;
}

echo '&nbsp;&nbsp;';

if(($row['AdminLevel'] > "1" ))
	switch ($row['AdminLevel']) {
    case "2":
        echo '<span class="badge badge-success"><i class="fas fa-user-shield"></i>&nbsp;Junior Admin';
        break;
    case "3":
        echo '<span class="badge badge-warning"><i class="fas fa-user-shield"></i>&nbsp;General Admin';
        break;
    case "4":
        echo '<span class="badge badge-sadmin"><i class="fas fa-user-shield"></i>&nbsp;Senior Admin</span>';
        break;
    case "5":
        echo '<span class="badge badge-hadmin"><i class="fas fa-user-shield"></i>&nbsp;Head Admin</span>';
        break;
    case "6":
        echo '<span class="badge badge-asstmanagement"><i class="fas fa-user-shield"></i>&nbsp;Asst. Management</span>';
        break;
    case "7":
        echo '<span class="badge badge-management"><i class="fas fa-user-shield"></i>&nbsp;Management</span>';
        break;
}

echo '&nbsp;&nbsp;';

if(($row['Helper'] > "0" ))
	switch ($row['Helper']) {
    case "1":
        echo '<span class="badge badge-helper"><i class="fas fa-handshake"></i>&nbsp;Junior Helper</span>';
        break;
    case "2":
        echo '<span class="badge badge-helper"><i class="fas fa-handshake"></i>&nbsp;Senior Helper</span>';
        break;
    case "3":
        echo '<span class="badge badge-helper"><i class="fas fa-handshake"></i>&nbsp;Head Helper</span>';
        break;
}

?>
													</div>
													<div class="kt-widget__items">
														<a href="profile.php" class="kt-widget__item <?php echo $profilestatsmenu_active ?>">
															<span class="kt-widget__section">
																<span class="kt-widget__icon">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24"/>
        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"/>
    </g>
</svg> </span>
																<span class="kt-widget__desc">
																	Profile Stats
																</span>
															</span>
														</a>
														<a href="inventory.php" class="kt-widget__item <?php echo $inventorymenu_active ?>">
															<span class="kt-widget__section">
																<span class="kt-widget__icon">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <path d="M4,7 L20,7 L20,19.5 C20,20.3284271 19.3284271,21 18.5,21 L5.5,21 C4.67157288,21 4,20.3284271 4,19.5 L4,7 Z M10,10 C9.44771525,10 9,10.4477153 9,11 C9,11.5522847 9.44771525,12 10,12 L14,12 C14.5522847,12 15,11.5522847 15,11 C15,10.4477153 14.5522847,10 14,10 L10,10 Z" fill="#000000"/>
        <rect fill="#000000" opacity="0.3" x="2" y="3" width="20" height="4" rx="1"/>
    </g>
</svg> </span>
																<span class="kt-widget__desc">
																	Inventory
																</span>
															</span>
														</a>
														<a href="changepass.php" class="kt-widget__item <?php echo $changepassmenu_active ?>">
															<span class="kt-widget__section">
																<span class="kt-widget__icon">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <mask fill="white">
            <use xlink:href="#path-1"/>
        </mask>
        <g/>
        <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill="#000000"/>
    </g>
</svg> </span>
																<span class="kt-widget__desc">
																	Change Password
																</span>
															</span>
														</a>
														<a href="punishments.php" class="kt-widget__item <?php echo $punishmentsmenu_active ?>">
															<span class="kt-widget__section">
																<span class="kt-widget__icon">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <path d="M3.51471863,18.6568542 L13.4142136,8.75735931 C13.8047379,8.36683502 14.4379028,8.36683502 14.8284271,8.75735931 L16.2426407,10.1715729 C16.633165,10.5620972 16.633165,11.1952621 16.2426407,11.5857864 L6.34314575,21.4852814 C5.95262146,21.8758057 5.31945648,21.8758057 4.92893219,21.4852814 L3.51471863,20.0710678 C3.12419433,19.6805435 3.12419433,19.0473785 3.51471863,18.6568542 Z" fill="#000000" opacity="0.3"/>
        <path d="M9.87867966,6.63603897 L13.4142136,3.10050506 C13.8047379,2.70998077 14.4379028,2.70998077 14.8284271,3.10050506 L21.8994949,10.1715729 C22.2900192,10.5620972 22.2900192,11.1952621 21.8994949,11.5857864 L18.363961,15.1213203 C17.9734367,15.5118446 17.3402718,15.5118446 16.9497475,15.1213203 L9.87867966,8.05025253 C9.48815536,7.65972824 9.48815536,7.02656326 9.87867966,6.63603897 Z" fill="#000000"/>
        <path d="M17.3033009,4.86827202 L18.0104076,4.16116524 C18.2056698,3.96590309 18.5222523,3.96590309 18.7175144,4.16116524 L20.8388348,6.28248558 C21.0340969,6.47774772 21.0340969,6.79433021 20.8388348,6.98959236 L20.131728,7.69669914 C19.9364658,7.89196129 19.6198833,7.89196129 19.4246212,7.69669914 L17.3033009,5.5753788 C17.1080387,5.38011665 17.1080387,5.06353416 17.3033009,4.86827202 Z" fill="#000000" opacity="0.3"/>
    </g>
</svg> </span>
																<span class="kt-widget__desc">
																	Punishment Records
																</span>
															</span>
														</a>
													</div>
												</div>
											</div>

											<!--end::Widget -->
										</div>
									</div>
									</div>