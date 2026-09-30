import React from "react";
import ChatPanel from "@/components/shared/ChatPanel";

export default function LogistikChat() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Chat Koperasi Induk</h2>
        <p className="text-muted-foreground">Koordinasi langsung dengan Pengurus Gudang Pusat KKMP Mekarjaya</p>
      </div>
      <ChatPanel title="Chat Pengurus KKMP Mekarjaya" receiverRole="admin" senderRole="logistik" channelId="admin-logistik" />
    </div>
  );
}