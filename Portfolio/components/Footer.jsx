export default function Footer() {
  return (
    <footer className="py-6 text-center bg-white border-t">
      <div className="container">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Mahendra Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
