import '../styles/About.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){

    return (<>
        <div className='about-text'>
        <p>A Nuclear Manatee swims between liminal places, collecting the fragments that everyday life loses trough friction in a ephemeral orbit.</p>
        <p>He then seeks refuge in a glowing reef and use those fragments to make indie tabletop roleplaying games <strong>built around powerful questions</strong>.</p>
        <p>Here, you can either see <strong><Link exact to='/newsletter'>the process</Link></strong> or <strong><Link exact to='/games'>the result</Link></strong></p>
        <p>

        </p>
        <p><em>a Nuclear Manatee</em> is the pen name for <em>Edoardo Cremaschi (he/him)</em></p>
        </div>
    </>)
}