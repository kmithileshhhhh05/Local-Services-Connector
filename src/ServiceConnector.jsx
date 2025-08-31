import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Avatar } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Search,
//   Home,
//   Bell,
//   MessageSquare,
//   User,
//   Menu,
//   Star,
//   MapPin,
//   Calendar,
//   ChevronRight,
//   Phone,
//   Mail,
//   Briefcase,
//   Heart
// } from "lucide-react";

function ServiceConnector() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Services" },
    { id: "plumbing", name: "Plumbing" },
    { id: "electrical", name: "Electrical" },
    { id: "tutoring", name: "Tutoring" },
    { id: "cleaning", name: "Cleaning" },
    { id: "landscaping", name: "Landscaping" }
  ];
  
  const featuredProviders = [
    {
      id: 1,
      name: "Alex Johnson",
      profession: "Plumber",
      rating: 4.9,
      reviews: 127,
      image: "/api/placeholder/40/40",
      location: "Downtown, 2.3 mi away",
      available: true
    },
    {
      id: 2,
      name: "Samantha Lee",
      profession: "Electrician",
      rating: 4.7,
      reviews: 95,
      image: "/api/placeholder/40/40",
      location: "Westside, 1.5 mi away",
      available: true
    },
    {
      id: 3,
      name: "Michael Chen",
      profession: "Math Tutor",
      rating: 5.0,
      reviews: 56,
      image: "/api/placeholder/40/40",
      location: "Northside, 3.2 mi away",
      available: false
    },
    {
      id: 4,
      name: "Jessica Smith",
      profession: "House Cleaner",
      rating: 4.8,
      reviews: 112,
      image: "/api/placeholder/40/40",
      location: "Eastside, 0.8 mi away",
      available: true
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Curved Sticky Navbar */}
      <header className="sticky top-0 z-50">
        <div className="navbar-container">
          <nav className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-800 shadow-md rounded-b-2xl">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                LocalPro
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="nav-link active">
                <Home className="w-5 h-5 mr-1" />
                <span>Home</span>
              </a>
              <a href="#" className="nav-link">
                <Briefcase className="w-5 h-5 mr-1" />
                <span>Services</span>
              </a>
              <a href="#" className="nav-link">
                <MessageSquare className="w-5 h-5 mr-1" />
                <span>Messages</span>
              </a>
              <a href="#" className="nav-link">
                <Calendar className="w-5 h-5 mr-1" />
                <span>Bookings</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full" size="icon">
                    <Avatar className="h-8 w-8">
                      <img src="/api/placeholder/32/32" alt="User" />
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="p-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl shadow-lg text-white">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Local Service Professionals Near You</h1>
              <p className="text-lg mb-6 opacity-90">Connect with verified experts for all your home and personal needs</p>
              
              <div className="relative">
                <Input
                  type="text"
                  placeholder="What service do you need?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-lg text-slate-800 w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-md">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Browse Categories</h2>
            <Button variant="ghost" className="text-blue-600 flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className={`cursor-pointer hover:shadow-md transition-all ${
                  activeCategory === category.id ? 'border-blue-500 shadow-md' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
                    {category.id === "plumbing" && <img src="/api/placeholder/24/24" alt="Plumbing" />}
                    {category.id === "electrical" && <img src="/api/placeholder/24/24" alt="Electrical" />}
                    {category.id === "tutoring" && <img src="/api/placeholder/24/24" alt="Tutoring" />}
                    {category.id === "cleaning" && <img src="/api/placeholder/24/24" alt="Cleaning" />}
                    {category.id === "landscaping" && <img src="/api/placeholder/24/24" alt="Landscaping" />}
                    {category.id === "all" && <img src="/api/placeholder/24/24" alt="All Services" />}
                  </div>
                  <span className="text-center font-medium">{category.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Professionals Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top-Rated Professionals</h2>
            <Button variant="ghost" className="text-blue-600 flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProviders.map((provider) => (
              <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-all">
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <img src={provider.image} alt={provider.name} />
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{provider.name}</CardTitle>
                        <CardDescription>{provider.profession}</CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-500">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    <span className="font-medium mr-1">{provider.rating}</span>
                    <span className="text-slate-500 text-sm">({provider.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {provider.location}
                  </div>
                  <Badge variant={provider.available ? "success" : "secondary"} className="mb-3">
                    {provider.available ? "Available Today" : "Next Available: Tomorrow"}
                  </Badge>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" /> Call
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" /> Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Search Services</h3>
                <p className="text-slate-500">Find the right professional for any job based on ratings and reviews</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Book & Connect</h3>
                <p className="text-slate-500">Schedule appointments and message professionals directly</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Review & Rate</h3>
                <p className="text-slate-500">Share your experience to help others find quality service</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join as Provider CTA */}
        <section>
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-cyan-400 p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Are You a Service Professional?</h2>
                <p className="mb-6">Join our platform to find new clients and grow your business locally.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-white/30 rounded-full flex items-center justify-center mr-2">✓</div>
                    <span>Connect with local customers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-white/30 rounded-full flex items-center justify-center mr-2">✓</div>
                    <span>Free profile setup</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 bg-white/30 rounded-full flex items-center justify-center mr-2">✓</div>
                    <span>Simple booking management</span>
                  </li>
                </ul>
                <Button className="bg-white text-blue-600 hover:bg-blue-50">Register as Provider</Button>
              </div>
              <div className="md:w-1/2 p-8 flex items-center justify-center">
                <img src="/api/placeholder/400/240" alt="Service Providers" className="rounded-lg" />
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">LocalPro</h3>
              <p className="text-slate-300 text-sm">Connecting local professionals with customers since 2024</p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Safety Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">© 2024 LocalPro. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <img src="/api/placeholder/16/16" alt="Twitter" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <img src="/api/placeholder/16/16" alt="Facebook" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <img src="/api/placeholder/16/16" alt="Instagram" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServiceConnector;