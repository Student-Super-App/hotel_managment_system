// ============================================================
// ROBO HMS Admin Portal - Login Page
// ============================================================
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/hooks/useAppStore';
import { setCredentials } from '@/store/slices/authSlice';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(
        setCredentials({
          user: {
            id: 'admin-1',
            name: 'Robo Admin',
            email: email || 'admin@robohms.com',
            role: 'super_admin',
            createdAt: new Date().toISOString(),
          },
          token: 'demo-admin-token',
          portalType: 'admin',
        })
      );
      setLoading(false);
      navigate('/admin');
    }, 500);
  };

  const handleDemoLogin = () => {
    setEmail('admin@robohms.com');
    setPassword('admin123');
    dispatch(
      setCredentials({
        user: {
          id: 'admin-1',
          name: 'Robo Admin',
          email: 'admin@robohms.com',
          role: 'super_admin',
          createdAt: new Date().toISOString(),
        },
        token: 'demo-admin-token',
        portalType: 'admin',
      })
    );
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-destructive/5">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-3">
            <Shield className="size-6 text-destructive" />
          </div>
          <CardTitle className="text-xl">Robo Admin Portal</CardTitle>
          <CardDescription>System administration access</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="admin@robohms.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input type={showPassword ? 'text' : 'password'} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In to Admin'}
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={handleDemoLogin}>
              Demo Admin Access
            </Button>
          </form>
          <p className="text-center text-xs text-muted-foreground mt-4">
            <a href="/hotel/login" className="hover:underline">Go to Hotel Portal Login</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
