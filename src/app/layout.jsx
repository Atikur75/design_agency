import {Poppins} from "next/font/google";
import './globals.css'
import Providers from "@/components/Providers";
import SiteNavbar from "@/components/SiteNavbar";
import Subscribe from "@/components/Subscribe";
import SiteFooter from "@/components/SiteFooter";


const poppins = Poppins({
  subsets: ['latin'],
  weight : ['300','400','500','600','700'],
  variable : "--font-poppins",
})

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL+"api/SiteMeta/home");
  const JSON = await res.json();
    return{
      title : JSON[0]["title"],
      description : JSON[0]["description"],
      keywords : JSON[0]["keywords"],
      openGraph :{
        image : JSON[0]["image"]
      }
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SiteNavbar/>
        <Providers>
          {children}
        </Providers>
        <Subscribe/>
        <SiteFooter/>
      </body>
    </html>
  )
}
