// vite.config.js
import restart from "file:///D:/Web%20Development/ThreeJS/Haunted%20House%20Project/node_modules/.pnpm/vite-plugin-restart@0.4.2_vite@5.4.11/node_modules/vite-plugin-restart/dist/index.js";
var vite_config_default = {
  root: "src/",
  // Sources files (typically where index.html is)
  publicDir: "../static/",
  // Path from "root" to static assets (files that are served as they are)
  server: {
    host: true,
    // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env)
    // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist",
    // Output in the dist/ folder
    emptyOutDir: true,
    // Empty the folder first
    sourcemap: true
    // Add sourcemap
  },
  plugins: [
    restart({ restart: ["../static/**"] })
    // Restart server on static file change
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXZWIgRGV2ZWxvcG1lbnRcXFxcVGhyZWVKU1xcXFxIYXVudGVkIEhvdXNlIFByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdlYiBEZXZlbG9wbWVudFxcXFxUaHJlZUpTXFxcXEhhdW50ZWQgSG91c2UgUHJvamVjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV2ViJTIwRGV2ZWxvcG1lbnQvVGhyZWVKUy9IYXVudGVkJTIwSG91c2UlMjBQcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlc3RhcnQgZnJvbSAndml0ZS1wbHVnaW4tcmVzdGFydCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJvb3Q6ICdzcmMvJywgLy8gU291cmNlcyBmaWxlcyAodHlwaWNhbGx5IHdoZXJlIGluZGV4Lmh0bWwgaXMpXG4gICAgcHVibGljRGlyOiAnLi4vc3RhdGljLycsIC8vIFBhdGggZnJvbSBcInJvb3RcIiB0byBzdGF0aWMgYXNzZXRzIChmaWxlcyB0aGF0IGFyZSBzZXJ2ZWQgYXMgdGhleSBhcmUpXG4gICAgc2VydmVyOlxuICAgIHtcbiAgICAgICAgaG9zdDogdHJ1ZSwgLy8gT3BlbiB0byBsb2NhbCBuZXR3b3JrIGFuZCBkaXNwbGF5IFVSTFxuICAgICAgICBvcGVuOiAhKCdTQU5EQk9YX1VSTCcgaW4gcHJvY2Vzcy5lbnYgfHwgJ0NPREVTQU5EQk9YX0hPU1QnIGluIHByb2Nlc3MuZW52KSAvLyBPcGVuIGlmIGl0J3Mgbm90IGEgQ29kZVNhbmRib3hcbiAgICB9LFxuICAgIGJ1aWxkOlxuICAgIHtcbiAgICAgICAgb3V0RGlyOiAnLi4vZGlzdCcsIC8vIE91dHB1dCBpbiB0aGUgZGlzdC8gZm9sZGVyXG4gICAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLCAvLyBFbXB0eSB0aGUgZm9sZGVyIGZpcnN0XG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSAvLyBBZGQgc291cmNlbWFwXG4gICAgfSxcbiAgICBwbHVnaW5zOlxuICAgIFtcbiAgICAgICAgcmVzdGFydCh7IHJlc3RhcnQ6IFsgJy4uL3N0YXRpYy8qKicsIF0gfSkgLy8gUmVzdGFydCBzZXJ2ZXIgb24gc3RhdGljIGZpbGUgY2hhbmdlXG4gICAgXSxcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdWLE9BQU8sYUFBYTtBQUVwVyxJQUFPLHNCQUFRO0FBQUEsRUFDWCxNQUFNO0FBQUE7QUFBQSxFQUNOLFdBQVc7QUFBQTtBQUFBLEVBQ1gsUUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNLEVBQUUsaUJBQWlCLFFBQVEsT0FBTyxzQkFBc0IsUUFBUTtBQUFBO0FBQUEsRUFDMUU7QUFBQSxFQUNBLE9BQ0E7QUFBQSxJQUNJLFFBQVE7QUFBQTtBQUFBLElBQ1IsYUFBYTtBQUFBO0FBQUEsSUFDYixXQUFXO0FBQUE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUNBO0FBQUEsSUFDSSxRQUFRLEVBQUUsU0FBUyxDQUFFLGNBQWdCLEVBQUUsQ0FBQztBQUFBO0FBQUEsRUFDNUM7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
