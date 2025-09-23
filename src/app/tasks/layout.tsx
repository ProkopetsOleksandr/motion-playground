'use client';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper-layout text-white">
      <button
        className="text-white cursor-pointer bg-blue-500 px-2 py-1 rounded absolute top-5 left-5"
        onClick={() => location.replace('/')}>
        Go back
      </button>
      <div>{children}</div>
    </div>
  );
}
