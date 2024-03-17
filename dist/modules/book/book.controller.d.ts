import { BookService } from './book.service';
import { BookDTO } from './book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
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
