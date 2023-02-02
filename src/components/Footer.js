import { Link } from "react-scroll";

const Footer = () => {
    const today = new Date();

  return (
      <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
                <h2>YooTech Inc.</h2>
                999 Astro Way<br></br>
                Fairfield, New Jersey 9013-1201<br></br>
                Email: <a href="mailto:pilotbtc001@gmail.com">pilotbtc001@gmail.com</a><br></br>
                Phone: <a href="tel:+2349121312741">(912) 131-2741</a>
            </address>
            <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
                <Link to="addjobs" spy={true} smooth={true} offset={-100} duration={500}  className="hover:opacity-90 cursor-pointer ">Add jobs</Link>
                <Link to="jobs" spy={true} smooth={true} offset={-100} duration={500}  className="hover:opacity-90 cursor-pointer">Jobs</Link>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}  className="hover:opacity-90 cursor-pointer">Contact Us</Link>
            </nav>
            <div className="flex flex-col sm:gap-2">
                <p className="text-right">Copyright &copy; <span id="year"> {today.getFullYear()}</span></p>
                <p className="text-right">All Rights Reserved</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer