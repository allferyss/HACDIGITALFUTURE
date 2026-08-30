import { Plus, Pencil, Trash2 } from "lucide-react";

interface Column {
  key: string;
  label: string;
}

export function AdminTable({
  title,
  description,
  addLabel,
  columns,
  rows,
}: {
  title: string;
  description: string;
  addLabel: string;
  columns: Column[];
  rows: Record<string, string>[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-medium text-white">{title}</h1>
          <p className="mt-1 text-sm text-mist">{description}</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-hac-gradient px-5 py-2.5 text-sm font-medium text-white">
          <Plus className="h-4 w-4" /> {addLabel}
        </button>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-navy-800/60 text-mist">
            <tr>
              {columns.map((c) => (
                <th key={c.key} className="px-5 py-3 font-medium">{c.label}</th>
              ))}
              <th className="px-5 py-3 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-white/5 text-mist">
                {columns.map((c) => (
                  <td key={c.key} className="px-5 py-4">{row[c.key]}</td>
                ))}
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg border border-white/10 p-2 hover:text-white"><Pencil className="h-3.5 w-3.5" /></button>
                    <button className="rounded-lg border border-white/10 p-2 hover:text-red-400"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
