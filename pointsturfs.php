<?php
ob_start();
$pointsturfs_active = 'kt-menu__item--active';
include('sidebar.php');

$points = $odb -> query("SELECT points.id,points.time,points.capturedby,points.name,gangs.name as capturedgang FROM points INNER JOIN gangs on gangs.id = points.capturedgang ORDER BY `time` ASC");
$turfs = $odb -> query("SELECT turfs.id,turfs.time,turfs.capturedby,turfs.name,gangs.name as capturedgang FROM turfs INNER JOIN gangs on gangs.id = turfs.capturedgang ORDER BY `time` ASC");
?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Points & Turfs Info</h3>
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


												<!-- begin:: Content -->
						<script type="text/javascript">
														$(document).ready(function() {
    $('#points').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
    } );

    $('#turfs').DataTable( {
        "paging":   true,
        "ordering": false,
        "info":     false,
        "searching": false,
        "lengthChange": false,
    } );
} );
						</script>
						<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
							<div class="kt-portlet kt-portlet--mobile">
								<div class="kt-portlet__body">
									<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title portlettitle">
													<span class="kt-portlet__head-icon">
													<i class="flaticon-list"></i>
												</span>&nbsp;&nbsp;Points Info
												</h3>
											    </div>

									<!--begin: Datatable -->
									<?php 
						echo '<table id="points" class="table table-bordered" cellspacing="0" width="100%">

  <thead class="thead-light">
    <tr>
      <th class="th-sm"><center>Point</center>
      </th>
      <th class="th-sm"><center>Current Owner</center>
      </th>
      <th class="th-sm"><center>Capped By</center>
      </th>
      <th class="th-sm"><center>Time</center>
      </th>
    </tr>
  </thead>
  <tbody>';
  while($row = $points -> fetch())
  {
    echo '
    <tr>
      <td>'.$row['name'].''; ?>
      <?php echo '</td>
      <td>'.$row['capturedgang'].'</td>
      <td>'.$row['capturedby'].'</td>
      <td>'.$row['time'].'</td>
    </tr>
    ';} ?>
  </tbody>
  <tfoot>

  </tfoot>
</table>

									<!--end: Datatable -->
								</div>
							</div>
						</div>


						<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
							<div class="kt-portlet kt-portlet--mobile">
								<div class="kt-portlet__body">
									<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title portlettitle">
													<span class="kt-portlet__head-icon">
													<i class="flaticon-list"></i>
												</span>&nbsp;&nbsp;Turfs Info
												</h3>
											    </div>

									<!--begin: Datatable -->
									<?php 
						echo '<table id="turfs" class="table table-bordered" cellspacing="0" width="100%">

  <thead class="thead-light">
    <tr>
      <th class="th-sm"><center>Turf</center>
      </th>
      <th class="th-sm"><center>Current Owner</center>
      </th>
      <th class="th-sm"><center>Capped By</center>
      </th>
      <th class="th-sm"><center>Time</center>
      </th>
    </tr>
  </thead>
  <tbody>';
  while($row = $turfs -> fetch())
  {
    echo '
    <tr>
      <td>'.$row['name'].''; ?>
      <?php echo '</td>
      <td>'.$row['capturedgang'].'</td>
      <td>'.$row['capturedby'].'</td>
      <td>'.$row['time'].'</td>
    </tr>
    ';} ?>
  </tbody>
  <tfoot>

  </tfoot>
</table>

									<!--end: Datatable -->
								</div>
							</div>
						</div>
<!-- end:: Content -->
					</div>



				</div>
			</div>
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