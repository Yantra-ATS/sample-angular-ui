// src/global.d.ts or src/google.d.ts

declare global {
  interface Window {
    google: any;  // You can use a more specific type, but `any` works as a quick solution
  }
}

export {}; // This ensures the file is treated as a module
