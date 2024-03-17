import { BookDTO } from './book.dto';
import { PrismaService } from 'src/database/PrismaService';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: BookDTO): Promise<{
        id: string;
        title: string;
        description: string;
        bar_code: string;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string;
        bar_code: string;
    }[]>;
    update(id: string, data: BookDTO): Promise<{
        id: string;
        title: string;
        description: string;
        bar_code: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        bar_code: string;
    }>;
}
