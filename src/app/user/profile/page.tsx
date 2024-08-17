"use client";

import { Button } from "@/components/ui/button";
import { Shield, Mail, MapPinHouse, Phone, PenSquare } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();

  if (!session) return;
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex md:flex-row flex-col gap-8">
        <div className="flex-0 space-y-8">
          <div className="relative border shadow p-4 rounded-lg">
            <Button
              className="absolute right-2 top-2 rounded-full bg-secondary hover:bg-secondary-foreground"
              size={"icon"}
            >
              <PenSquare size={20} />
            </Button>
            <img
              src={`${session?.user?.image}`}
              alt=""
              className="h-20 w-20 rounded-full mx-auto"
            />
            <div className="space-y-2 mt-8">
              <p className="text-base text-secondary-foreground font-normal flex items-center gap-2 capitalize">
                <Shield size={20} className="text-secondary" />
                {session?.user?.name}
              </p>
              <p className="text-base text-secondary-foreground font-normal flex items-center gap-2">
                <Mail size={20} className="text-secondary" />
                {session?.user?.email}
              </p>
              <p className="text-base text-secondary-foreground font-normal flex items-center gap-2 capitalize">
                <MapPinHouse size={20} className="text-secondary" />
                not specified
              </p>
              <p className="text-base text-secondary-foreground font-normal flex items-center gap-2 capitalize">
                <Phone size={20} className="text-secondary" />
                not specified
              </p>
            </div>
          </div>
          {/* <div className="border shadow rounded-lg p-4"></div> */}
        </div>
        <div className="flex-1">
          <div className="border shadow p-4 rounded-lg">
            <h2 className="text-base font-semibold">Order Information</h2>
            <div>
              <p className="text-base text-secondary-foreground font-normal">
                No order found!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
