import React from 'react'

export default function Games(){

    return (<>
        <div className='games-littlekatysteaparty'>
        <h2>Little Katy's Tea Party</h2>
        <div className='itch-io-container'>
            <iframe
                title='littlekatysteaparty' 
                frameborder="0" 
                src="https://itch.io/embed/1025422?linkback=true&amp;border_width=0&amp;bg_color=cccedb&amp;fg_color=273667&amp;link_color=327345&amp;border_color=a2a4b1" width="550" height="165">
                <a href="https://nuclearmanatee.itch.io/little-katys-tea-party">
                    Little Katy's Tea Party by Nuclear Manatee
                </a>
            </iframe>
        </div>
        </div>
        <div className='games-forthylich'>
        <h2>For Thy Lich</h2>
        <div className='itch-io-container'>
        <iframe
            title='forthylich' 
            frameborder="0" 
            src="https://itch.io/embed/1086041?linkback=true&amp;border_width=0&amp;bg_color=ffffff&amp;fg_color=000000&amp;link_color=fb922b&amp;border_color=666666" width="550" height="165"
        >
            <a href="https://nuclearmanatee.itch.io/for-thy-lich">
                For Thy Lich by Nuclear Manatee
            </a>
        </iframe>
        </div>
        </div>
        <p></p>
        <p>You can find more on <strong><a href='nuclearmanatee.itch.io'>itch.io</a></strong>.</p>

    </>)
}