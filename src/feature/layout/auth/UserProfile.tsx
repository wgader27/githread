import { Button } from '@/components/ui/button';
import { DropdownMenuContent, DropdownMenuItem , DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth'
import {User2, Settings} from 'lucide-react';
import Link from 'next/link';
import { DropdownMenuItemLogout } from './LogoutButton';

export const UserProfile = async () => {
    const session = await getAuthSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                    {session?.user.name ?? ""}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/profile">
                        <User2 className='mr-2 h-4 w-4'/>
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Settings className='mr-2 h-4 w-4'/>
                    Paramètres
                </DropdownMenuItem>
                <DropdownMenuItemLogout/>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
