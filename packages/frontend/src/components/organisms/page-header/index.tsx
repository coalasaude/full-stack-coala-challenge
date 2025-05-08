"use client";

import { Button } from "@/components/atoms/button";
import { AddBookDialog } from "@/components/molecules/add-book-dialog";
import { AddExchangeDialog } from "@/components/molecules/add-exchange-dialog";
import { DialogBox } from "@/components/molecules/dialog-box";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const PageHeader = () => {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddExchange, setShowAddExchange] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookshelf Elder</h1>
        <p className="text-muted-foreground mt-1">
          Manage your read books and wishlist, and exchange with others
        </p>
      </div>
      <div className="flex gap-2">
        <DialogBox
          open={showAddBook}
          onOpenChange={setShowAddBook}
          button={
            <Button onClick={() => setShowAddBook(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Book
            </Button>
          }
        >
          <AddBookDialog close={() => setShowAddBook(false)} />
        </DialogBox>
        <DialogBox
          open={showAddExchange}
          onOpenChange={setShowAddExchange}
          button={
            <Button variant="outline" onClick={() => setShowAddExchange(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Exchange
            </Button>
          }
        >
          <AddExchangeDialog close={() => setShowAddExchange(false)} />
        </DialogBox>
      </div>
    </div>
  );
};

export { PageHeader };
