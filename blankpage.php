<?php
ob_start();
include('sidebar.php');
require_once 'includes/dbcon.php';
require_once 'includes/init.php';

if (!($player -> LoggedIn()))
{
	header('location: login.php');
	die();
}

$result = $odb -> prepare("SELECT * FROM `players` WHERE `uid`= :id");
$result -> execute(array(":id" => $_SESSION['ID']));

$result2 = $odb -> prepare("SELECT * FROM `vehicles` WHERE owner=':id'");
$result2 -> execute(array(":id" => $_SESSION['ID']));

$result3 = $odb -> prepare("SELECT * FROM `businesses` WHERE owner=':id'");
$result3 -> execute(array(":id" => $_SESSION['ID']));

$result4 = $odb -> prepare("SELECT * FROM `garages` WHERE owner=':id'");
$result4 -> execute(array(":id" => $_SESSION['ID']));

$result5 = $odb -> prepare("SELECT * FROM `houses` WHERE owner=':id'");
$result5 -> execute(array(":id" => $_SESSION['ID']));
?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Dashboard</h3>
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