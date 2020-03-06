<?php
ob_start();
$phonebook_active = 'kt-menu__item--active';
include('sidebar.php');

$hzphonebook = $odb -> query("SELECT * FROM `phonebook` ORDER BY `number` ASC");
?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Phone Book</h3>
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
												<style type="text/css">
							table.dataTable thead .sorting:after,
table.dataTable thead .sorting:before,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_asc:before,
table.dataTable thead .sorting_asc_disabled:after,
table.dataTable thead .sorting_asc_disabled:before,
table.dataTable thead .sorting_desc:after,
table.dataTable thead .sorting_desc:before,
table.dataTable thead .sorting_desc_disabled:after,
table.dataTable thead .sorting_desc_disabled:before {
  bottom: .5em;
}
						</style>
						<script type="text/javascript">
							$(document).ready(function () {
$('#phonebook').DataTable({
"order": [[ 1, "asc" ]]
});
$('.dataTables_length').addClass('bs-select');
});
						</script>
						<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
							<div class="kt-portlet kt-portlet--mobile">
								<div class="kt-portlet__body">

									<!--begin: Datatable -->
									<?php 
						echo '<table id="phonebook" class="table table-striped table-bordered table" cellspacing="0" width="100%">

  <thead>
    <tr>
      <th class="th-sm"><center><i class="fas fa-user mr-2 blue-text" aria-hidden="true"></i>UserName</center>
      </th>
      <th class="th-sm"><center><i class="fas fa-phone mr-2 blue-text" aria-hidden="true"></i>Number</center>
      </th>
    </tr>
  </thead>
  <tbody>';
  while($row = $hzphonebook -> fetch())
  {
  		$row['name'] = str_replace("_", " ", $row['name']);
	$row['name'] = ucwords($row['name']);
    echo '
    <tr>
      <td>'.$row['name'].''; ?>
      <?php echo '</td>
      <td>'.$row['number'].'</td>
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