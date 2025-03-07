import React, { useState } from "react";
import { Card, CardContent } from "./ui/Card.jsx";
import { Button } from "./ui/button.jsx";
import { Plus, Trash, ChevronDown } from "lucide-react";

const WBS = () => {
  const [wbsElements, setWbsElements] = useState([
    { id: 1, name: "", responsible: "", expanded: false, subsections: [] },
    { id: 2, name: "", responsible: "", expanded: false, subsections: [] },
    { id: 3, name: "", responsible: "", expanded: false, subsections: [] },
  ]);

  const reorderIds = (elements) => {
    return elements.map((element, index) => ({
      ...element,
      id: index + 1,
      subsections: element.subsections.map((sub, subIndex) => ({
        ...sub,
        id: subIndex + 1,
        subsubsections: sub.subsubsections.map((subsub, subsubIndex) => ({
          ...subsub,
          id: subsubIndex + 1,
        })),
      })),
    }));
  };

  const addWBSElement = () => {
    setWbsElements((prevElements) => [
      ...prevElements,
      { id: prevElements.length + 1, name: "", responsible: "", expanded: false, subsections: [] },
    ]);
  };

  const deleteWBSElement = (id) => {
    setWbsElements((prevElements) => reorderIds(prevElements.filter((element) => element.id !== id)));
  };

  const deleteSubsection = (parentId, subId) => {
    setWbsElements((prevElements) =>
      reorderIds(
        prevElements.map((element) =>
          element.id === parentId
            ? {
                ...element,
                subsections: element.subsections.filter((sub) => sub.id !== subId),
              }
            : element
        )
      )
    );
  };

  const deleteSubsubsection = (parentId, subId, subsubId) => {
    setWbsElements((prevElements) =>
      reorderIds(
        prevElements.map((element) =>
          element.id === parentId
            ? {
                ...element,
                subsections: element.subsections.map((sub) =>
                  sub.id === subId
                    ? {
                        ...sub,
                        subsubsections: sub.subsubsections.filter((subsub) => subsub.id !== subsubId),
                      }
                    : sub
                ),
              }
            : element
        )
      )
    );
  };

  const updateWBSElement = (id, field, value) => {
    setWbsElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, [field]: value } : element
      )
    );
  };

  const toggleExpand = (id) => {
    setWbsElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, expanded: !element.expanded } : element
      )
    );
  };

  const addSubsection = (parentId) => {
    setWbsElements((prevElements) =>
      prevElements.map((element) =>
        element.id === parentId
          ? {
              ...element,
              subsections: [
                ...element.subsections,
                { id: element.subsections.length + 1, name: "", responsible: "", subsubsections: [] },
              ],
            }
          : element
      )
    );
  };

  const addSubsubsection = (parentId, subId) => {
    setWbsElements((prevElements) =>
      prevElements.map((element) =>
        element.id === parentId
          ? {
              ...element,
              subsections: element.subsections.map((sub) =>
                sub.id === subId
                  ? {
                      ...sub,
                      subsubsections: [
                        ...sub.subsubsections,
                        { id: sub.subsubsections.length + 1, name: "", responsible: "" },
                      ],
                    }
                  : sub
              ),
            }
          : element
      )
    );
  };

  const updateDB = () => {
    alert("Database updated successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Project Title</h1>

      <div className="flex flex-col gap-4 w-full max-w-4xl">
        {wbsElements.map((element) => (
          <Card
            key={element.id}
            className="w-full p-4 flex flex-col items-center border rounded-2xl shadow-lg relative bg-blue-100"
          >
            <div className="absolute top-2 left-2 px-2 py-1 bg-blue-200 rounded-full font-semibold text-sm">
              Section {element.id}
            </div>
            <CardContent className="w-full flex flex-col items-center">
              <input
                type="text"
                value={element.name}
                onChange={(e) =>
                  updateWBSElement(element.id, "name", e.target.value)
                }
                className="w-3/4 text-center font-semibold text-lg border-b-2 focus:outline-none mb-2"
                placeholder="Name"
              />
              <input
                type="text"
                value={element.responsible}
                onChange={(e) =>
                  updateWBSElement(element.id, "responsible", e.target.value)
                }
                className="w-3/4 text-center border-b-2 focus:outline-none"
                placeholder="Responsible"
              />
              <Button
                onClick={() => toggleExpand(element.id)}
                variant="outline"
                className="mt-2 flex items-center gap-2"
              >
                <ChevronDown />
                {element.expanded ? "Hide Details" : "Show Details"}
              </Button>
              {element.expanded && (
                <div className="mt-4 w-full flex flex-col items-center">
                  <p className="text-center font-semibold">Subsections:</p>
                  <div className="flex flex-col gap-2 w-full items-center">
                    {element.subsections.map((sub) => (
                      <div
                        key={sub.id}
                        className="border p-4 rounded-lg flex flex-col items-center relative bg-green-100 w-full"
                      >
                        <div className="absolute top-2 left-2 px-2 py-1 bg-green-200 rounded-full font-semibold text-sm">
                          Section {element.id}.{sub.id}
                        </div>
                        <input
                          type="text"
                          value={sub.name}
                          onChange={(e) =>
                            updateWBSElement(element.id, "subsections", [
                              ...element.subsections.map((s) =>
                                s.id === sub.id
                                  ? { ...s, name: e.target.value }
                                  : s
                              ),
                            ])
                          }
                          className="w-3/4 text-center font-semibold text-lg border-b-2 focus:outline-none mb-2"
                          placeholder="Subsection Name"
                        />
                        <input
                          type="text"
                          value={sub.responsible}
                          onChange={(e) =>
                            updateWBSElement(element.id, "subsections", [
                              ...element.subsections.map((s) =>
                                s.id === sub.id
                                  ? { ...s, responsible: e.target.value }
                                  : s
                              ),
                            ])
                          }
                          className="w-3/4 text-center border-b-2 focus:outline-none"
                          placeholder="Responsible"
                        />
                        <Button
                          onClick={() => deleteSubsection(element.id, sub.id)}
                          variant="ghost"
                          className="absolute bottom-2 right-2 text-red-500"
                        >
                          <Trash />
                        </Button>
                        <div className="w-full flex flex-col gap-2 items-center mt-2">
                          <p className="text-center font-semibold">Subsubsections:</p>
                          {sub.subsubsections &&
                            sub.subsubsections.map((subsub) => (
                              <div
                                key={subsub.id}
                                className="border p-4 rounded-lg flex flex-col items-center relative bg-yellow-100 w-full"
                              >
                                <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-200 rounded-full font-semibold text-sm">
                                  Section {element.id}.{sub.id}.{subsub.id}
                                </div>
                                <input
                                  type="text"
                                  value={subsub.name}
                                  onChange={(e) =>
                                    updateWBSElement(element.id, "subsections", [
                                      ...element.subsections.map((s) =>
                                        s.id === sub.id
                                          ? {
                                              ...s,
                                              subsubsections: s.subsubsections.map((ss) =>
                                                ss.id === subsub.id
                                                  ? { ...ss, name: e.target.value }
                                                  : ss
                                              ),
                                            }
                                          : s
                                      ),
                                    ])
                                  }
                                  className="w-3/4 text-center font-semibold text-lg border-b-2 focus:outline-none mb-2"
                                  placeholder="Subsubsection Name"
                                />
                                <input
                                  type="text"
                                  value={subsub.responsible}
                                  onChange={(e) =>
                                    updateWBSElement(element.id, "subsections", [
                                      ...element.subsections.map((s) =>
                                        s.id === sub.id
                                          ? {
                                              ...s,
                                              subsubsections: s.subsubsections.map((ss) =>
                                                ss.id === subsub.id
                                                  ? { ...ss, responsible: e.target.value }
                                                  : ss
                                              ),
                                            }
                                          : s
                                      ),
                                    ])
                                  }
                                  className="w-3/4 text-center border-b-2 focus:outline-none"
                                  placeholder="Responsible"
                                />
                                <Button
                                  onClick={() => deleteSubsubsection(element.id, sub.id, subsub.id)}
                                  variant="ghost"
                                  className="absolute bottom-2 right-2 text-red-500"
                                >
                                  <Trash />
                                </Button>
                              </div>
                            ))}
                          <Button
                            onClick={() => addSubsubsection(element.id, sub.id)}
                            variant="secondary"
                            className="mt-2 self-center"
                          >
                            <Plus /> Add Subsubsection
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button
                      onClick={() => addSubsection(element.id)}
                      variant="secondary"
                      className="mt-2 self-center"
                    >
                      <Plus /> Add Subsection
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <Button
              onClick={() => deleteWBSElement(element.id)}
              variant="ghost"
              className="absolute bottom-2 right-2 text-red-500"
            >
              <Trash />
            </Button>
          </Card>
        ))}
        <Button
          onClick={addWBSElement}
          variant="primary"
          className="mt-4 flex items-center gap-2 self-center"
        >
          <Plus /> Add Section
        </Button>
        <Button
          onClick={updateDB}
          variant="success"
          className="mt-4 flex items-center gap-2 self-center"
        >
          Update Database
        </Button>
      </div>
    </div>
  );
};

export default WBS;