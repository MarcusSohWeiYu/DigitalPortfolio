<?php
$file = 'Resume/Soh-Wei-Yu_IT_Resume_V1.pdf'; // Adjust the path to your PDF file
header('Content-Description: File Transfer');
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="'.basename($file).'"');
readfile($file);
?>
