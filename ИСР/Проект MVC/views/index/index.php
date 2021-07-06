<?php
  $name=$this->content[0]['name'];
  $email=$this->content[0]['email'];
  $contact=$this->content[0]['contact'];
?>

<div class="container">
    <div class="row clearfix">
        <div class="col-md-12 column">
                           
  <form action="<?php echo URL; ?>index/edit_submit_index" method="post" enctype="multipart/form-data" onsubmit="return confirm('Do you really want to submit the form?');">

    <div class="col-xs-6 form-group">
      <label class="control-label col-xs-6" for="name">name:</label>
      <div class="col-xs-6">
        <input class="form-control" name="name" id="name" placeholder="Enter name">
      </div>
    </div>
	<div class="col-xs-6 form-group">
      <label class="control-label col-xs-6" for="email">email:</label>
      <div class="col-xs-6">
        <input type="text" class="form-control" name="email" id="email" placeholder="Enter email">
      </div>
    </div>
    <div class="col-xs-6 form-group">
      <label class="control-label col-xs-6" for="contact">contact:</label>
      <div class="col-xs-6">         
        <input type="text" class="form-control" name="contact" id="contact" placeholder="Enter contact">
      </div>
    </div>

    <div class="col-xs-6 form-group">        
      <div class="col-sm-offset-2 col-xs-6">

       
      <button type="submit" class=".btn-info form-control" value="submit" name="submit">Submit</button>
	 

      </div>
     </div>
    </form>
   </div>
  </div>
 </div>