import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';


import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';

import '@fortawesome/fontawesome-free/js/all.min';

$(document).ready(function() {
    
        $('[data-toggle="tooltip"]').tooltip();

        $('.add-to-cart-btn').click(function(){
                alert('اضيف المنتج الى عربة الشراء');
        });
     
});

