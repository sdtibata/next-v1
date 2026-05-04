"use client";
import React from 'react';

export default function Hijo({ children }: { children: React.ReactNode }) {
    return (
    <div>
        este es mi hijo {children}
    </div>
  );
}