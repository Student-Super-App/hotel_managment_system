// ============================================================
// ROBO HMS - Hotel Login Page
// ============================================================
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hotel, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/hooks/useAppStore';
import { setCredentials } from '@/store/slices/authSlice';

export default function HotelLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Demo login - replace with real API call
    setTimeout(() => {
      dispatch(setCredentials({
        user: {
          id: '1',
          name: 'John Manager',
          email: email || 'manager@hotel.com',
          role: 'manager',
          hotelId: 'h1',
          isActive: true,
          createdAt: new Date().toISOString(),
        },
        token: 'demo-token-hotel',
        portalType: 'hotel',
      }));
      setLoading(false);
      navigate('/hotel');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-xl bg-primary text-primary-foreground size-12">
              <Hotel className="size-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ROBO HMS</h1>
              <p className="text-xs text-muted-foreground">Hotel Management System</p>
            </div>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Hotel Portal Login</CardTitle>
            <CardDescription>Sign in to manage your hotel operations</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="manager@hotel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>Demo credentials: any email / any password</p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link to="/admin/login" className="hover:text-primary underline">Admin Portal →</Link>
        </p>
      </div>
    </div>
  );
}
