const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">FoodiesHub</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                <p>&copy; 2022 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodieshub@gmail.com</p>
                <p>+8801956732580</p>
                <p>Dhaka, Bangladesh</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p className="facebook" onClick={() => window.open('https://www.facebook.com/people/Nitish-Biswas/100009017233862/')}>Facebook</p>
                <p className="twitter" onClick={() => window.open('https://www.facebook.com/people/Nitish-Biswas/100009017233862/')}>Twitter</p>
                <p className="instagram" onClick={() => window.open('https://www.facebook.com/people/Nitish-Biswas/100009017233862/')}>Instagram</p>
            </div>
        </div>
    )
}

export default Footer
