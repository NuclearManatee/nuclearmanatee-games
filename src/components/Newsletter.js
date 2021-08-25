import React from 'react'
import '../styles/Newsletter.css'
//import clsx from 'clsx'

export default function Newsletter(){


    function handleNewsletterSubmit(event){
        event.preventDefault()
        fetch("https://itch.us19.list-manage.com/subscribe/post?u=143c334f7136b95c1685164ce&amp;id=f14a839e62",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  }
            }
        ).then(
            res => console.log(res)
        ).catch( 
            err => console.log(err)
        ).finally(
            console.log("finished")
        )
        
        
        console.log('Newsletter submitted')
    }

    return (<>
        <div className='newsletter-text'>
            <p><strong>A Message in the Bottle</strong> is a monthly commitment to give you news about what's up in the liminal sea.
            Work in progress, games played and things worth noticing.</p>
            <p>Upon subscribing, you'll recieve the latest version of the game currently developed, <strong>For Thy Lich</strong>, plus a short series of introductory emails.</p>
        </div>
        <div className='newsletter-form'>
            <form onSubmit={handleNewsletterSubmit}>
                <div class="indicates-required"><span className='font-small'><span class="asterisk">*</span> indicates required</span></div>
                <div class="field-group">
                    <label for="mce-EMAIL">Email Address<span class="asterisk">* </span>
                </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required />
                </div>
                <div class="field-group">
                    <label for="mce-NAME">Name </label>
                    <input type="text" value="" name="NAME" class="" id="mce-NAME" />
                </div>
                <div class="field-group input-group">
                    Games you want to hear about:
                    <ul>
                        <li><input type="checkbox" defaultChecked='true' value="2" name="group[12498][2]" id="mce-group[12498]-12498-0" /><label for="mce-group[12498]-12498-0">Little Katy's Tea Party</label></li>
                        <li><input type="checkbox" defaultChecked='true' value="1" name="group[12498][1]" id="mce-group[12498]-12498-1" /><label for="mce-group[12498]-12498-1">Marks on the Skin</label></li>
                        <li><input type="checkbox" defaultChecked='true' value="4" name="group[12498][4]" id="mce-group[12498]-12498-2" /><label for="mce-group[12498]-12498-2">For Thy Lich</label></li>
                    </ul>
                </div>
                <div class="field-group input-group">
                        Your <u>explicit</u> consent to contact you via email <span className='font-small'>(for GDPR purposes)</span><span class="asterisk">*</span>
                        <input type="checkbox" value="Yes" name="EMAILCONS" id="mce-EMAILCONS-0" required/>

                </div>
                <div className="form-responses">
                    <div className="form-response-success"></div>
                    <div className="form-response-error"></div>
                </div>
                <div className='form-control-div' aria-hidden="true">
                    <input type="text" name="b_143c334f7136b95c1685164ce_f14a839e62" tabindex="-1" value="" />
                </div>
                <div class="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                </div>
            </form>
        </div>
    </>)
}