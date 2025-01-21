import { SettingSpacing } from "../definitions/settings.ts";

function newSettingSpacing(): SettingSpacing {
  return {
    blockGap: true,
    margin: true,
    padding: true,
    spacingScale: {
      steps: 0,
    },
    spacingSizes: [
      {
        name: "1px",
        size: "1px",
        slug: "px",
      },
      {
        name: "0.125rem (2px)",
        size: "clamp(0.125rem, 0.625vw, 0.25rem)",
        slug: "0-5",
      },
      {
        name: "0.25rem (4px)",
        size: "clamp(0.25rem, 1.25vw, 0.5rem)",
        slug: "1",
      },
      {
        name: "0.375rem (6px)",
        size: "clamp(0.375rem, 1.875vw, 0.75rem)",
        slug: "1-5",
      },
      {
        name: "0.5rem (8px)",
        size: "clamp(0.5rem, 2.5vw, 1rem)",
        slug: "2",
      },
      {
        name: "0.625rem (10px)",
        size: "clamp(0.625rem, 3.125vw, 1.25rem)",
        slug: "2-5",
      },
      {
        name: "0.75rem (12px)",
        size: "clamp(0.75rem, 3.75vw, 1.5rem)",
        slug: "3",
      },
      {
        name: "0.875rem (14px)",
        size: "clamp(0.875rem, 4.375vw, 1.75rem)",
        slug: "3-5",
      },
      {
        name: "1rem (16px)",
        size: "clamp(1rem, 5vw, 2rem)",
        slug: "4",
      },
      {
        name: "1.25rem (20px)",
        size: "clamp(1.25rem, 6.25vw, 2.5rem)",
        slug: "5",
      },
      {
        name: "1.5rem (24px)",
        size: "clamp(1.5rem, 7.5vw, 3rem)",
        slug: "6",
      },
      {
        name: "1.75rem (28px)",
        size: "clamp(1.75rem, 5vw, 3.125rem)",
        slug: "7",
      },
      {
        name: "2rem (32px)",
        size: "clamp(2rem, 10vw, 4rem)",
        slug: "8",
      },
      {
        name: "2.25rem (36px)",
        size: "clamp(2.25rem, 11.25vw, 4.5rem)",
        slug: "9",
      },
      {
        name: "2.5rem (40px)",
        size: "clamp(2.5rem, 12.5vw, 5rem)",
        slug: "10",
      },
      {
        name: "2.75rem (44px)",
        size: "clamp(2.75rem, 13.75vw, 5.5rem)",
        slug: "11",
      },
      {
        name: "3rem (48px)",
        size: "clamp(3rem, 15vw, 6rem)",
        slug: "12",
      },
      {
        name: "3.5rem (56px)",
        size: "clamp(3.5rem, 17.5vw, 7rem)",
        slug: "14",
      },
      {
        name: "4rem (64px)",
        size: "clamp(4rem, 20vw, 8rem)",
        slug: "16",
      },
      {
        name: "5rem (80px)",
        size: "clamp(5rem, 25vw, 10rem)",
        slug: "20",
      },
      {
        name: "6rem (96px)",
        size: "clamp(6rem, 30vw, 12rem)",
        slug: "24",
      },
      {
        name: "7rem (112px)",
        size: "clamp(7rem, 35vw, 14rem)",
        slug: "28",
      },
      {
        name: "8rem (128px)",
        size: "clamp(8rem, 40vw, 16rem)",
        slug: "32",
      },
      {
        name: "9rem (144px)",
        size: "clamp(9rem, 45vw, 18rem)",
        slug: "36",
      },
      {
        name: "10rem (160px)",
        size: "clamp(10rem, 50vw, 20rem)",
        slug: "40",
      },
      {
        name: "11rem (176px)",
        size: "clamp(11rem, 55vw, 22rem)",
        slug: "44",
      },
      {
        name: "12rem (192px)",
        size: "clamp(12rem, 60vw, 24rem)",
        slug: "48",
      },
      {
        name: "13rem (208px)",
        size: "clamp(13rem, 65vw, 26rem)",
        slug: "52",
      },
      {
        name: "14rem (224px)",
        size: "clamp(14rem, 70vw, 28rem)",
        slug: "56",
      },
      {
        name: "15rem (240px)",
        size: "clamp(15rem, 75vw, 30rem)",
        slug: "60",
      },
      {
        name: "16rem (256px)",
        size: "clamp(16rem, 80vw, 32rem)",
        slug: "64",
      },
      {
        name: "18rem (288px)",
        size: "clamp(18rem, 90vw, 36rem)",
        slug: "72",
      },
      {
        name: "20rem (320px)",
        size: "clamp(20rem, 100vw, 40rem)",
        slug: "80",
      },
      {
        name: "24rem (384px)",
        size: "clamp(24rem, 120vw, 48rem)",
        slug: "96",
      },
    ],
    units: ["%", "px", "em", "rem", "vh", "vw"],
  };
}

export default newSettingSpacing;
