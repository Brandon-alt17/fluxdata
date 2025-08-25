import React, { useState } from "react";
import background from "./background.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";
import image from "./image.svg";
import vector from "./vector.svg";

export const MockupInicioDe = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Password reset submitted");
  };

  return (
    <div className="bg-[#dde6ed] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-assets-globales-blanco border border-solid border-assets-globales-blanco-palido w-[1440px] h-[1024px]">
        <div className="relative w-[1345px] h-[1024px]">
          <img
            className="w-[1018px] h-[1024px] top-0 left-0 aspect-[0.87] absolute object-cover"
            alt="Background image showing a laptop with password reset screen"
            src={image6}
          />

          <div className="absolute w-[1229px] h-[811px] top-[92px] left-[116px] bg-assets-globales-blanco-palido rounded-[20px]" />

          <form onSubmit={handleSubmit} className="contents">
            <div className="absolute w-[345px] h-[53px] top-[490px] left-[873px]">
              <div className="relative w-[343px] h-[53px] bg-assets-globales-blanco-palido border border-solid border-[#0000004c]">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Contraseña nueva"
                  className="absolute w-[231px] top-[17px] left-[22px] [font-family:'Work_Sans-Regular',Helvetica] font-normal text-[#000000b2] text-base tracking-[0] leading-[normal] bg-transparent border-none outline-none placeholder:text-[#000000b2]"
                  required
                  aria-label="Nueva contraseña"
                />
              </div>
            </div>

            <div className="absolute top-[409px] left-[239px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[normal]">
              {""}
            </div>

            <div className="absolute w-[345px] h-[54px] top-[566px] left-[873px]">
              <div className="relative w-[343px] h-[54px] bg-assets-globales-blanco-palido border border-solid border-[#0000004c]">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmar contraseña"
                  className="absolute w-[231px] top-[17px] left-[22px] [font-family:'Work_Sans-Regular',Helvetica] font-normal text-[#000000b2] text-base tracking-[0] leading-[normal] whitespace-nowrap bg-transparent border-none outline-none placeholder:text-[#000000b2]"
                  required
                  aria-label="Confirmar contraseña"
                />
              </div>
            </div>

            <div className="absolute w-[300px] h-[45px] top-[653px] left-[894px]">
              <div className="w-[302px] h-[45px]">
                <button
                  type="submit"
                  className="relative w-[300px] h-[45px] bg-[#394867] rounded-[50px] hover:bg-[#2d3a52] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#394867] focus:ring-offset-2"
                  aria-label="Restablecer contraseña"
                >
                  <span className="absolute w-[119px] top-[11px] left-[91px] [font-family:'Work_Sans-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                    Restablecer
                  </span>
                </button>
              </div>
            </div>
          </form>

          <img
            className="w-[635px] h-[772px] top-28 left-[142px] aspect-[0.82] absolute object-cover"
            alt="Laptop displaying password reset interface"
            src={image5}
          />

          <img
            className="absolute w-[165px] h-[18px] top-[163px] left-[816px]"
            alt="FLUXDATA logo"
            src={background}
          />

          <h1 className="absolute top-[272px] left-[900px] [font-family:'Work_Sans-Bold',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[normal]">
            Restablecer
            <br /> Contraseña
          </h1>

          <p className="absolute top-[417px] left-[936px] [font-family:'Work_Sans-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Completa los campos
          </p>

          <button
            type="button"
            className="absolute w-[52px] h-[52px] top-[137px] left-[1216px] hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Cerrar"
          >
            <div className="relative w-[34px] h-[34px] top-[9px] left-[9px]">
              <img
                className="absolute w-[18px] h-[34px] top-0 left-0"
                alt=""
                src={vector}
              />

              <img
                className="absolute w-[34px] h-[3px] top-[15px] left-0"
                alt=""
                src={image}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
