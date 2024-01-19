import { Outlet } from "react-router-dom";
import { RootFooter, RootHeader } from "./layout";
import { Separator } from "@/components/ui/separator";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 min-h-10 ">
          <div className="max-w-[1024px] p-2 px-4 mx-auto">
            <RootHeader />
          </div>
          <Separator />
        </div>
        <div>
          <div className="max-w-[1024px] p-2 px-4 mx-auto">
            <Outlet />
          </div>
        </div>
        <Separator className="mt-auto" />
        <div>
          <div className="max-w-[1024px] p-2 px-4 mx-auto">
            <RootFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
