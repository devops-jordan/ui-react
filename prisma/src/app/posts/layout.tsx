export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#282c34] h-full text-white tracking-tighter text-[17px]">
      {children}
    </div>
  );
}
