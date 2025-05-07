"use client";

import { Button, Container } from "@radix-ui/themes";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
// import { AddBookDialog } from "./add-book-dialog";
// import { AddExchangeDialog } from "./add-exchange-dialog";

export function PageHeader() {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddExchange, setShowAddExchange] = useState(false);

  return (
    <Container className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookshelf Elder</h1>
        <p className="text-muted-foreground mt-1">
          Manage your read books and wishlist, and exchange with others
        </p>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setShowAddBook(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Book
        </Button>
        <Button variant="outline" onClick={() => setShowAddExchange(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Exchange
        </Button>
      </div>

      {/* <AddBookDialog open={showAddBook} onOpenChange={setShowAddBook} />
      <AddExchangeDialog
        open={showAddExchange}
        onOpenChange={setShowAddExchange}
      /> */}
    </Container>
  );
}
