<?php
ob_start();
session_start();
$index_active = 'kt-menu__item--active';
include('sidebar.php');
require_once 'includes/dbcon.php';
require_once 'includes/init.php';

// Check if $_COOKIE already set
if(!isset($_COOKIE['remember_me'])){  
	//header("Location:login.php");
}
else
{
    $str = $_COOKIE['remember_me'];
    $stmt = $odb -> query("SELECT * FROM `players` WHERE SessID='$str'");
    $row= $stmt -> fetch();
    if($_COOKIE['remember_me'] == $row['SessID'])
    {
    	
    }
}

$result = $odb -> prepare("SELECT * FROM `players` WHERE `uid`= :id");
$result -> execute(array(":id" => $_SESSION['ID']));

$hznews = $odb -> query("SELECT * FROM `news` ORDER BY id ASC LIMIT 3");
$pointResult = $odb -> query("SELECT * FROM `points` ORDER BY `time` ASC LIMIT 1");
$turfResult = $odb -> query("SELECT * FROM `turfs` ORDER BY `time` ASC LIMIT 1");
$data1 = '';
$avgplayercount = $odb -> query("SELECT * FROM `playercount`")

?>

						<!-- begin:: Content Head -->
						<div class="kt-subheader  kt-grid__item" id="kt_subheader">
							<div class="kt-container  kt-container--fluid ">
								<div class="kt-subheader__main">
									<h3 class="kt-subheader__title">Dashboard</h3>
									<span class="kt-subheader__separator kt-subheader__separator--v"></span>
									<style type="text/css">
										#news-ticker { 
    font-weight: 400;
    color:#646c9a;
    display: block;
    font-size: 15px;
    padding: 0;
    margin: 0
}

#news-ticker .ticker-title {
    display: inline-block;
    margin-right: 12px;
}

#news-ticker ul { 
    display: inline-block;
    position: relative;
}


#news-ticker li {
    position: absolute;
    left: 0;
    width: 0;
    overflow: hidden;
    height: 1.7em;
    word-wrap: break-word;  
    opacity: 0
}

#news-ticker li.tick {
    -webkit-animation: tick 5s linear;
    
}

@-webkit-keyframes tick {
  0% {
    width: 0;
  }
  5% {
      opacity: 1;
  } 
  90% {
    width: 550px;
    opacity: 1;
  }
  100% {
     opacity: 0
  }
}
									</style>
									<script type="text/javascript">
			$(function () {
    var $ticker = $('#news-ticker'),
      $first = $('li:first-child', $ticker);
    
    // put an empty space between each letter so we can 
    // use break word
    $('a', $ticker).each(function () {
        var $this = $(this),
          text = $this.text();
       $this.html(text.split('').join('&#8203;'));
    });
    
    // begin the animation
    function tick($el) {
        $el.addClass('tick')
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
              
            $el.removeClass('tick');
              var $next = $el.next('li');
              $next = $next.length > 0 ? $next : $first;
            tick($next);
        });
    }
        
    tick($first);
    
});
		</script>
		<div id="news-ticker">
    <ul>
        <li>
             <?php while($row = $pointResult -> fetch())
             echo "Next Point: &nbsp;".$row['name']." in &nbsp;" .$row['time']. "&nbsp;hours "; ?>
        </li>
        <li>
            <?php while($row = $turfResult -> fetch())
             echo "Next Turf: &nbsp;".$row['name']." in &nbsp;" .$row['time']. "&nbsp;hours "; ?>
        </li>
    </ul>
</div>
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

							<!--Begin::Dashboard 1-->

							<!--Begin::Row-->
							<div class="row">
								<div class="col-xl-6">

									<!--begin:: Widgets/Quick Stats-->
									<div class="row row-full-height">
										<div class="col-lg-6">
											<div class="kt-portlet kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
												<div class="kt-portlet__body kt-portlet__body--fluid">
													<?php 
											while($row = $avgplayercount -> fetch())
												{

		$data1 = $data1 . '"'. $row['playercount'] .'",';
	}

	$data1 = trim($data1,",");
?>
													<div class="kt-widget26" style="overflow: hidden;">
														<div class="kt-widget26__chart" style="height:100px; width: 450px;">
															<canvas id="chart"></canvas>
															<script>
				var ctx = document.getElementById("chart").getContext('2d');
    			var myChart = new Chart(ctx, {
        		type: 'line',
		        data: {
		            labels: [1,3,5,7,9,11,13,15,17,19,21,23],
		            datasets: 
		            [{
		            	label: '',
		                data: [<?php echo $data1; ?>],
		                backgroundColor: 'transparent',
		                borderColor:'rgba(88,103,221,1)',
		                borderWidth: 3,
		                pointHitRadius: 20,
                        pointHoverBackgroundColor:'rgba(220,53,69,1)'

		            }]
		        },
		     
		        options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Players'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },

                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 4
                    },
                    line: {
                        tension: 0.0000001
                    }
                },

                layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 5,
                        bottom: 0
                    }
                }
            }
		    });
			</script>
														</div>
														<div class="kt-widget26__content">
															<?php
                                                            foreach ($odb -> query("SELECT AVG(playercount) AS avgplayercount FROM `playercount`") as $row);                                                         
															?>
															<span class="kt-widget26__number"><?php 
															echo round($row['avgplayercount']) ?></span>
															<span class="kt-widget26__desc">24-Hour Average</span>
														</div>
													</div>
												</div>
											</div>
											<div class="kt-space-20"></div>
										<div class="kt-portlet kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
										<div class="kt-portlet__body kt-portlet--height-fluid-half">
											<?php 
											while($row = $hznews -> fetch())
												{ ?>
											<div class="kt-notification kt-notification--fit">
												<a href="<?php echo $row['url']; ?>" class="kt-notification__item">
													<div class="kt-notification__item-icon">
														<i class="flaticon2-speaker kt-font-primary"></i>
													</div>
													<div class="kt-notification__item-details">
														<div class="kt-notification__item-title">
															<?php echo $row['subject']; ?>
														</div>
														<div class="kt-notification__item-time">
															<?php echo $row['date']; ?>
														</div>
													</div>
												</a>	
                                            </div>
                                        <?php } ?> 
										</div>
									</div>
								</div>
										<div class="col-lg-6">
										<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-brand">
										<div class="kt-portlet__body">
											<div class="kt-widget kt-widget--user-profile-3">
												<div class="kt-widget__top">
													<?php if($result === FALSE) {
														die(mysql_error());
													}
													while($row = $result -> fetch()){ ?>

													<div>
														<a href="images/skins/<?php echo $row['Skin']; ?>.png" class="preview" title="Skin <?php echo $row['Skin']; ?>"><img src='images/faces/<?php echo $row['Skin']; ?>.png' class='img-thumbnail'></a>
													</div>
													<div class="kt-widget__content">
														<div class="kt-widget__head">
															<?php
		                      $row['Username'] = str_replace("_", " ", $row['Username']);
		                      $row['Username'] = ucwords($row['Username']);
                            ?>
															<div class="kt-widget__username">
																<?php echo" " .$row['Username']. " " ?>
															</div>
															<div class="kt-widget__action">
																<a href="profile.php"><button type="button" class="btn btn-label-primary btn-sm btn-upper">Visit Profile</button></a>&nbsp;
															</div>
														</div>
														<div class="kt-widget__subhead">
															<?php if(($row['Donator'] > "0" ))
															switch ($row['Donator']) {
    case "1":
        echo '<span class="badge badge-pill badge-danger"><i class="fas fa-gem"></i>&nbsp;Ruby Donator</span>';
        break;
    case "2":
        echo '<span class="badge badge-pill badge-primary"><i class="fas fa-gem"></i>&nbsp;Sapphire Donator</span>';
        break;
    case "3":
        echo '<span class="badge badge-pill badge-info"><i class="fas fa-gem"></i>&nbsp;Diamond Donator</span>';
        break;
}

echo '&nbsp;&nbsp;';

if(($row['AdminLevel'] > "1" ))
	switch ($row['AdminLevel']) {
    case "2":
        echo '<span class="badge badge-pill badge-success"><i class="fas fa-user-shield"></i>&nbsp;Junior Admin';
        break;
    case "3":
        echo '<span class="badge badge-pill badge-warning"><i class="fas fa-user-shield"></i>&nbsp;General Admin';
        break;
    case "4":
        echo '<span class="badge badge-pill badge-sadmin"><i class="fas fa-user-shield"></i>&nbsp;Senior Admin</span>';
        break;
    case "5":
        echo '<span class="badge badge-pill badge-hadmin"><i class="fas fa-user-shield"></i>&nbsp;Head Admin</span>';
        break;
    case "6":
        echo '<span class="badge badge-pill badge-asstmanagement"><i class="fas fa-user-shield"></i>&nbsp;Asst. Management</span>';
        break;
    case "7":
        echo '<span class="badge badge-pill badge-management"><i class="fas fa-user-shield"></i>&nbsp;Management</span>';
        break;
}



if(($row['Helper'] > "0" ))
	switch ($row['Helper']) {
    case "1":
        echo '<span class="badge badge-pill badge-helper"><i class="fas fa-handshake"></i>&nbsp;Junior Helper</span>';
        break;
    case "2":
        echo '<span class="badge badge-pill badge-helper"><i class="fas fa-handshake"></i>&nbsp;Senior Helper</span>';
        break;
    case "3":
        echo '<span class="badge badge-pill badge-helper"><i class="fas fa-handshake"></i>&nbsp;Head Helper</span>';
        break;
}

?>
															
														</div>
														<div class="kt-widget__info">
															<div class="kt-widget__progress">
																<div class="kt-widget__text">
																	Health
																</div>
																<div class="progress" style="height: 5px;width: 100%;">
																	<div class="progress-bar-striped kt-bg-danger" role="progressbar" style="width: <?php echo $row['Health']; ?>%;" aria-valuenow=" <?php echo $row['Health']; ?> " aria-valuemin="0" aria-valuemax="100"></div>
																</div>
																<div class="kt-widget__stats">
																	<?php echo (int)$row['Health']; ?>
																</div>
															</div>
															<div class="kt-widget__progress">
																<div class="kt-widget__text">
																	Armor
																</div>
																<div class="progress" style="height: 5px;width: 100%;">
																	<div class="progress-bar-striped kt-bg-info" role="progressbar" style="width: <?php echo $row['Armor']; ?>%;" aria-valuenow=" <?php echo $row['Armor']; ?> " aria-valuemin="0" aria-valuemax="100"></div>
																</div>
																<div class="kt-widget__stats">
																	<?php echo (int)$row['Armor']; ?>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="kt-widget__bottom">
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
										</div>
							</div>

									<!--end:: Widgets/Quick Stats-->
								</div>
							</div>

						</div>

						<!-- end:: Content -->
					</div>
					<?php
}
?>



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