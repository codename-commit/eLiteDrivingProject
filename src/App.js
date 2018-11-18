import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <body>
	<div class="heading">
		 <canvas id="title" width="200" height="10" style="border:0px solid #d3d3d3;">

		</canvas>
	</div>
<div class="navigation" id="navigation"></div>

<div>Tesing Something New</div>

<div class="w3-top">
  <div class="w3-bar w3-black w3-card-2">
    <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
    <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
    <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
    <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
    <div class="w3-dropdown-hover w3-hide-small">
      <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button">Merchandise</a>
        <a href="#" class="w3-bar-item w3-button">Extras</a>
        <a href="#" class="w3-bar-item w3-button">Media</a>
      </div>
    </div>
    <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
  </div>
</div>


<div class="tags" id="tags">
		<p><font face="">

			<ul>
				<a  href=""><font style="color:Black">Home</font></a> |
				<a href="#OurServices"><font style="color:Black">Our Services</font></a> |
				<a href=''><font style="color:Black">About Us</font></a> |
				<a href=''><font style="color:Black">Contact Us</font></a>
			</ul>
		</font>
		</p>
	</div>




	<div class="pages">
	<h3>*****</h3>

/* drawing out a slide show for the home screen */
			{/* <div id="slideshow">

				 <p><img src="images/1.jpg" width="100%" height="" name="slide" /></p>

                // how do you impliment this part, as to slide the pictures through
                <script type="text/javascript">
						var step=1;
						function slideit()
						{
							document.images.slide.src = eval("image"+step+".src")
							if(step<4)
								step++;
							else
								step=1;
							setTimeout("slideit()",2500);
						}
						slideit();
				</script>

			</div> */}



	</div>
	<div class="pages" id="OurServices">
	<h1>Our Services</h1>

	<h2>***</h2>

<h3>LEARNER TRAINING:</h3>

<p>With over 20 years training learners we pride ourselves as one of the best driving schools offering the K 53 to the first time driver. At the same time as preparing our learners with the skills to pass the driving test we also pass on as much defensive knowledge to equip them with the skills needed to safely get themselves through their driving life.</p>

<h3>INSTRUCTOR'S TRAINING COURSE:</h3>

<p>So you have always had a passion for motor vehicles and are wanting to become an instructor, but you not sure how. Drive Well are now offering a comprehensive 4 week instructor’s course for those who think they have what it takes to train driver’s in the art of safely and efficiently controlling a motor vehicle. For further information please email us or contact us and we will provide you with all the necessary information and pricing. Terms and Conditions apply.</p>






	</div>
	<div class="pages">
	<h1>Fee Structure</h1>
	</div>
	<div class="pages">
	<h1>About US</h1>



	<h2>VISION STATEMENT</h2>
 <p>We at Drive Well understand the high demand of controlling a vehicle safely and with this in mind, we might not be amongst the biggest Driver Training companies but we pride ourselves at being amongst the best. So with this in mind, we always offer our clients the best when it comes to understanding how to control a vehicle safely and efficiently</p>

	</div>
	<div class="pages">
	<h1>Contact US:</h1>
<p><strong>****</strong></p>

<h3>PHYSICAL ADDRESS</h3>
<p>151 CHURCH STREET</p>
<p>JOHANNESBURG NORTH</p>
<p>GAUTENG </p>
<p>CONTACT NUMBERS :</p>
<p>TEL: (011) 7041741</p>
<p>MOBILE: 0717256697</p>
<p>EMAIL ADDRESS:</p>
<p>dmoss@telkomsa.net</p>



<p><strong>Office Number: *** *** ****</strong></p>


	</div>
	<div class="pages">
	<h1></h1>
	<section>
			<h1>Please file your complaint/notification below</h1>
			<form  method="post" action="input/inputFileComplain.php">
			  <label for="fname">Name:</label><br />
			  <input type="text" id="fname" name="contactNo" placeholder="Contact number/ Reference" /><br />
			  <label for="email">Email:</label><br />
			  <input type="text" id="fname" name="contactNo" placeholder="Contact number/ Reference" /><br />
			  <label for="phone">Phone:</label><br />
			  <input type="text" id="fname" name="contactNo" placeholder="Contact number/ Reference" /><br />
			  <label for="fname">MESSAGE:</label><br />
			  <textarea name="complaint" placeholder="what is your complaint?"></textarea><br /><br />
			  <button class="button">SEND COMPLAIN</button>
			</form>

		</section>
	</div>
	<div class="footer">
	<h5>Build and Created by GreenTech | Thabo James Maboya</h5>
	</div>

	</body>

      </div>
    );
  }
}

export default App;
