import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, MapPin, Users, Star } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center">
          <Plane className="h-12 w-12 text-blue-600 animate-pulse mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading Journey Mate...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Journey Mate</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome back!</span>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Adventures in Egypt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From diving in the Red Sea to safari adventures in the desert, 
            book verified activities with trusted local vendors.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Red Sea Adventures
              </CardTitle>
              <CardDescription>
                Diving, snorkeling, and water sports in crystal clear waters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Explore Activities</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Desert Safaris
              </CardTitle>
              <CardDescription>
                Quad biking, camel rides, and Bedouin experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Browse Tours</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-600" />
                Verified Vendors
              </CardTitle>
              <CardDescription>
                Book with confidence from trusted local operators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">See Reviews</Button>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">More Features Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              We're building the complete Journey Mate experience. Stay tuned for activity browsing, 
              real-time booking, vendor dashboard, and much more.
            </p>
            <div className="flex justify-center gap-4">
              <Button>Browse Activities (Coming Soon)</Button>
              <Button variant="outline">Vendor Dashboard (Coming Soon)</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
