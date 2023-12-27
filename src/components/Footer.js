import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
     <footer id="footer" className="footer">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          
          Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
        </div>
      </footer>
  )
}
