"use client";

import React from 'react';
import { ChevronDown, Plus, Settings } from 'lucide-react';
import { SalePageType } from '../page';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const salePageTypes: SalePageType[] = [ "Sale Invoices", "Estimate/Quotation", "Proforma Invoice", "Payment-In", "Sale Order", "Delivery Challan", "Sale Return", "Purchase Bills" ];

interface SalesLayoutProps {
    children: React.ReactNode;
    activePage: SalePageType;
    setActivePage: (page: SalePageType) => void;
    addButtonLabel: string; // <-- 1. Add new prop for the button label
}

const SalesLayout = ({ children, activePage, setActivePage, addButtonLabel }: SalesLayoutProps) => {
    return (
        <div className="bg-gray-50/50 min-h-screen p-4 sm:p-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2 text-2xl font-bold text-gray-800 p-0 hover:bg-transparent focus-visible:ring-0">
                                {activePage} <ChevronDown className="h-6 w-6 text-gray-500" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64">
                            <DropdownMenuRadioGroup value={activePage} onValueChange={(value) => setActivePage(value as SalePageType)}>
                                {salePageTypes.map(type => (
                                    <DropdownMenuRadioItem key={type} value={type}>{type}</DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <div className="flex items-center gap-3 mt-4 sm:mt-0">
                        {/* 2. Use the dynamic label for the button */}
                        <Button className="bg-[var(--accent-red)] text-white font-bold rounded-full shadow-sm hover:bg-red-600">
                            <Plus size={18} className="mr-2" /> {addButtonLabel}
                        </Button>
                        <Button variant="outline" size="icon"><Settings className="h-5 w-5 text-gray-600" /></Button>
                    </div>
                </header>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default SalesLayout;