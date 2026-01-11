'use client'

import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";



const studioConfig = defineConfig({
    projectId: process.env.NEXT_PUBLIC_STUDIO_CONFIG || '',
    dataset: 'production', 
    title: 'Active Chapel', 
    basePath: '/admindashboard', 
    schema: {
        types: schemaTypes
    },
    plugins: [structureTool(),visionTool()]


})

export default studioConfig


