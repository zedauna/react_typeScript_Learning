import { links, type Link } from "@/utils/links.ts";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button.tsx";
import { AlignLeft } from "lucide-react";

const LinksMobile = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <AlignLeft />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="lg:hidden bg-white rounded border-2 p-1" 
          align="start" 
          sideOffset={10}
          >
            {links.map(link=>{
              const {ref,label}=link as Link;
              return (
                <DropdownMenuItem key={label}>
                    <NavLink 
                          to={ref} 
                          className={({isActive})=>`capitalize tracking-wide font-light :${isActive ? "text-primary":""}`}
                    >
                        {label}
                    </NavLink>
                </DropdownMenuItem>);
            })}
        </DropdownMenuContent>;
      </DropdownMenu>
    </div>
  )
}
export default LinksMobile