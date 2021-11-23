import React from 'react';

import './Footer.css';

function Footer () {

return (
<section className="footer">
    <hr className="footer-seperator" />
    
    <section className="footer-info">
    <section className="footer-info-left">
        <section className="footer-info__name">
            Ecotripulantes@2021
        </section>
            
    </section>
    <section className="footer-info-center">
        <section className="footer-info__email">
        Ecotripulantes@gmail.com
        </section>
        <section className="footer-info__terms">
        Terminos y condiciones

        </section>
    </section>
    <section className="footer-info-right">
        <section className="footer-info__contact">
        Contáctanos
        
        </section>
    </section>
    </section>
    <hr className="footer-seperator" />
</section>
)

}

export default Footer;