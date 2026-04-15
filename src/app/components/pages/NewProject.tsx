import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { 
  FolderPlus, 
  Save, 
  X,
  Calendar,
  User,
  MapPin
} from "lucide-react";
import { Link } from "react-router";

export function NewProject() {
  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">New Project</h2>
          <p className="text-gray-500 mt-1">Create a new window and door fabrication project</p>
        </div>
      </div>

      {/* Project Form */}
      <Card className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FolderPlus className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-gray-900">Project Details</h3>
        </div>

        <form className="space-y-6">
          {/* Project Name */}
          <div className="space-y-2">
            <Label htmlFor="projectName">Project Name *</Label>
            <Input
              id="projectName"
              placeholder="e.g., Residential Complex A"
              className="bg-white"
            />
          </div>

          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="clientName"
                  placeholder="Enter client name"
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDate">Project Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="projectDate"
                  type="date"
                  className="pl-10 bg-white"
                  defaultValue="2026-04-15"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Project Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="location"
                placeholder="Enter project address"
                className="pl-10 bg-white"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Add project notes and requirements..."
              rows={4}
              className="bg-white resize-none"
            />
          </div>

          {/* Budget & Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget (USD)</Label>
              <Input
                id="budget"
                type="number"
                placeholder="0.00"
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="units">Total Units</Label>
              <Input
                id="units"
                type="number"
                placeholder="0"
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline</Label>
              <Input
                id="deadline"
                type="date"
                className="bg-white"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
            <Button type="submit" className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Save className="w-4 h-4" />
              Create Project
            </Button>
            <Link to="/">
              <Button type="button" variant="outline" className="gap-2">
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </Card>

      {/* Info Card */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <div className="flex gap-3">
          <div className="shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <FolderPlus className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Next Steps</h4>
            <p className="text-sm text-blue-700">
              After creating your project, you can proceed to the Design Input page to add window
              and door specifications, then run optimization to minimize material waste.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
