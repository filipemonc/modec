import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    const json = {
        results: [
            {
                name: "João Ninguém",
                email: "joao.ninguem@modec.com.br",
                department: "Marketing",
            },
            {
                name: "Fulano de tal",
                email: "fulano.tal@modec.com.br",
                department: "Sales",
            },
        ],
    };

    return NextResponse.json(json.results);
}
