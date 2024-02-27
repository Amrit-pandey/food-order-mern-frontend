import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

const MobileNav = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    Welcome to MernEats.com
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="font-bold bg-orange-500 flex-1">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;