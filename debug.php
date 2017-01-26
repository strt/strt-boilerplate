<?php 
function debug( $object=null, $label=null )
{ 
    $message = json_encode($object, JSON_PRETTY_PRINT); 
    $label = "PHP:" . ($label ? " ($label): " : ': '); 
    echo "<script>console.log(\"$label\", $message);</script>";
}