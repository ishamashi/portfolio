// components/JsonLdScript.tsx
import React from "react";
import type { Thing, WithContext } from "schema-dts"; // Install schema-dts: npm i schema-dts

// Ambil tipe spesifik yang mungkin Anda perlukan, atau gunakan 'Thing' sebagai tipe dasar
interface JsonLdScriptProps<T extends Thing> {
  jsonData: WithContext<T>; // schema-dts menambahkan @context secara otomatis
}

function JsonLdScript<T extends Thing>({ jsonData }: JsonLdScriptProps<T>) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }} />;
}

export default JsonLdScript;
