
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import postcss from "rollup-plugin-postcss";
export default defineConfig({
  input: "src/index.jsx",
  output: {
    dir: "dist",
    format: "es",
    name: "payme-cookie-manager",
  },
  external: ["react", "react-dom", "tailwindcss", "react-router-dom"],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
    postcss({
      extract: true, // Extract CSS into a separate file
      minimize: true, // Minify the CSS
      sourceMap: true, // Generate source maps
    }),
    //typescript({ tsconfig: "tsconfig.json" }), // Uncomment this line if you are using TypeScript
  ],
  //plugins:[typescript({tsconfig:'tsconfig.json'})]
});
