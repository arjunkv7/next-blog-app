import Link from "next/link";
import Categories from "./Categories";
// import { PaginationPrevious, PaginationItem, PaginationLink, PaginationEllipsis, PaginationNext, PaginationContent, Pagination } from "@/components/ui/pagination"

type blogObject = {
  title: string;
  author: string;
  contents: string;
  publishedDate: string;
};

export default function Blog(blogDetails: blogObject) {
  return (
    <>
      <main className="container mt-16 mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-8 px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={225}
              src="data:image/jpeg;base64,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"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                <Link className="hover:underline" href="#">
                  {blogDetails.title}
                </Link>
              </h2>
              <div className="flex items-center text-gray-500 mb-2">
                <UserIcon className="w-4 h-4 mr-1" />
                <span>{blogDetails.author}</span>
                <span className="mx-2">·</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>{blogDetails.publishedDate}</span>
              </div>
              <p className="text-gray-700 line-clamp-3">
                {blogDetails.contents}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                <Link className="hover:underline" href="#">
                  Mastering the Art of Storytelling
                </Link>
              </h2>
              <div className="flex items-center text-gray-500 mb-2">
                <UserIcon className="w-4 h-4 mr-1" />
                <span>John Doe</span>
                <span className="mx-2">·</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>May 26, 2023</span>
              </div>
              <p className="text-gray-700 line-clamp-3">
                Discover the secrets to crafting captivating stories that engage your audience and leave a lasting
                impression. Learn from the masters of the craft and unlock your storytelling potential.
              </p>
            </div>
          </div>

          
          
        </div>
        <Categories />
      </main>
      <div className="container mx-auto flex justify-center py-8 px-6 md:px-8 lg:px-12">
        {/* <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </div>
    </>
  );
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
