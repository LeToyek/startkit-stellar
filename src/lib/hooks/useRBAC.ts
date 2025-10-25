import { useAuthStore, UserRole } from '@/store/authStore';

export const useRBAC = () => {
  const { user } = useAuthStore();

  const hasRole = (role: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    
    return user.role === role;
  };

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    
    // TODO: Implement permission-based access control
    // This is a placeholder for more granular permissions
    const rolePermissions: Record<UserRole, string[]> = {
      admin: ['*'], // Admin has all permissions
      moderator: ['read', 'write', 'moderate'],
      user: ['read'],
    };
    
    return rolePermissions[user.role]?.includes(permission) || 
           rolePermissions[user.role]?.includes('*');
  };

  const isAdmin = hasRole('admin');
  const isModerator = hasRole('moderator');
  const isUser = hasRole('user');

  return {
    hasRole,
    hasPermission,
    isAdmin,
    isModerator,
    isUser,
    currentRole: user?.role,
  };
};
