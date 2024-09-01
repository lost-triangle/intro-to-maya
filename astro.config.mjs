import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Intro to Maya",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "01_getting_started" },
        },
        {
          label: "Animation Projekte",
          autogenerate: { directory: "02_development" },
        },
        {
          label: "Maya Grundlagen",
          autogenerate: { directory: "03_maya_basics" },
        },
        {
          label: "Modelling",
          autogenerate: { directory: "04_modelling" },
        },
        {
          label: "Modelling NURBS",
          autogenerate: { directory: "04a_modelling-nurbs" },
        },
        {
          label: "Modelling Polygon",
          autogenerate: { directory: "04b_modelling-polygon" },
        },
        {
          label: "Modelling Anmerkungen",
          autogenerate: { directory: "04c_modelling-anmerkungen" },
        },
        {
          label: "Camera",
          autogenerate: { directory: "05_camera" },
        },
        {
          label: "Lighting",
          autogenerate: { directory: "06_lighting" },
        },
        {
          label: "Shading",
          autogenerate: { directory: "07_shading" },
        },
        {
          label: "Animation",
          autogenerate: { directory: "08_animation" },
        },
        {
          label: "Rendering",
          autogenerate: { directory: "09_rendering" },
        },
        {
          label: "Anhang",
          autogenerate: { directory: "10_appendix" },
        },
        {
          label: "Abgabe",
          autogenerate: { directory: "11_submission" },
        },
      ],
    }),
  ],
});
